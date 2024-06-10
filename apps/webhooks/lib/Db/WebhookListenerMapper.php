<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Webhooks\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\Exception;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\EventDispatcher\IWebhookCompatibleEvent;
use OCP\ICache;
use OCP\ICacheFactory;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<WebhookListener>
 */
class WebhookListenerMapper extends QBMapper {
	public const TABLE_NAME = 'webhook_listeners';

	private const EVENTS_CACHE_KEY = 'eventsUsedInWebhooks';

	private ?ICache $cache = null;

	public function __construct(
		IDBConnection $db,
		ICacheFactory $cacheFactory,
	) {
		parent::__construct($db, self::TABLE_NAME, WebhookListener::class);
		if ($cacheFactory->isAvailable()) {
			$this->cache = $cacheFactory->createDistributed();
		}
	}

	/**
	 * @throws DoesNotExistException
	 * @throws MultipleObjectsReturnedException
	 * @throws Exception
	 */
	public function getById(int $id): WebhookListener {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName())
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));

		return $this->findEntity($qb);
	}

	/**
	 * @throws Exception
	 * @return WebhookListener[]
	 */
	public function getAll(): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName());

		return $this->findEntities($qb);
	}

	/**
	 * @throws Exception
	 */
	public function addWebhookListener(
		?string $appId,
		string $userId,
		string $httpMethod,
		string $uri,
		string $event,
		?array $eventFilter,
		?array $headers,
		AuthMethod $authMethod,
		#[\SensitiveParameter]
		?array $authData,
	): WebhookListener {
		/* Remove any superfluous antislash */
		$event = ltrim($event, '\\');
		if (!class_exists($event) || !is_a($event, IWebhookCompatibleEvent::class, true)) {
			throw new \UnexpectedValueException("$event is not an event class compatible with webhooks");
		}
		$webhookListener = WebhookListener::fromParams(
			[
				'appId' => $appId,
				'userId' => $userId,
				'httpMethod' => $httpMethod,
				'uri' => $uri,
				'event' => $event,
				'eventFilter' => $eventFilter ?? [],
				'headers' => $headers,
				'authMethod' => $authMethod->value,
			]
		);
		$webhookListener->setAuthDataClear($authData);
		$this->cache?->remove(self::EVENTS_CACHE_KEY);
		return $this->insert($webhookListener);
	}

	/**
	 * @throws Exception
	 */
	public function updateWebhookListener(
		int $id,
		?string $appId,
		string $userId,
		string $httpMethod,
		string $uri,
		string $event,
		?array $eventFilter,
		?array $headers,
		AuthMethod $authMethod,
		#[\SensitiveParameter]
		?array $authData,
	): WebhookListener {
		/* Remove any superfluous antislash */
		$event = ltrim($event, '\\');
		if (!class_exists($event) || !is_a($event, IWebhookCompatibleEvent::class, true)) {
			throw new \UnexpectedValueException("$event is not an event class compatible with webhooks");
		}
		$webhookListener = WebhookListener::fromParams(
			[
				'id' => $id,
				'appId' => $appId,
				'userId' => $userId,
				'httpMethod' => $httpMethod,
				'uri' => $uri,
				'event' => $event,
				'eventFilter' => $eventFilter ?? [],
				'headers' => $headers,
				'authMethod' => $authMethod->value,
			]
		);
		$webhookListener->setAuthDataClear($authData);
		$this->cache?->remove(self::EVENTS_CACHE_KEY);
		return $this->update($webhookListener);
	}

	/**
	 * @throws Exception
	 */
	public function deleteById(int $id): bool {
		$qb = $this->db->getQueryBuilder();

		$qb->delete($this->getTableName())
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));

		return ($qb->executeStatement() > 0);
	}

	/**
	 * @throws Exception
	 * @return list<string>
	 */
	private function getAllConfiguredEventsFromDatabase(): array {
		$qb = $this->db->getQueryBuilder();

		$qb->selectDistinct('event')
			->from($this->getTableName());

		$result = $qb->executeQuery();

		$configuredEvents = [];

		while (($event = $result->fetchOne()) !== false) {
			$configuredEvents[] = $event;
		}

		return $configuredEvents;
	}

	/**
	 * List all events with at least one webhook configured, with cache
	 * @throws Exception
	 * @return list<string>
	 */
	public function getAllConfiguredEvents(): array {
		$events = $this->cache?->get(self::EVENTS_CACHE_KEY);
		if ($events !== null) {
			return json_decode($events);
		}
		$events = $this->getAllConfiguredEventsFromDatabase();
		// cache for 5 minutes
		$this->cache?->set(self::EVENTS_CACHE_KEY, json_encode($events), 300);
		return $events;
	}

	/**
	 * @throws Exception
	 */
	public function getByEvent(string $event): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->getTableName())
			->where($qb->expr()->eq('event', $qb->createNamedParameter($event, IQueryBuilder::PARAM_STR)));

		return $this->findEntities($qb);
	}
}
