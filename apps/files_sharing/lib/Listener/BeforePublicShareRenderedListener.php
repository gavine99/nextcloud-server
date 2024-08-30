<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Files_Sharing\Listener;

use OCA\Files_Sharing\AppInfo\Application;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent as BeforePublicShareRenderedEvent;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/** @template-implements IEventListener<BeforePublicShareRenderedEvent> */
class BeforePublicShareRenderedListener implements IEventListener {
	public function handle(Event $event): void {
		if (!($event instanceof BeforePublicShareRenderedEvent)) {
			return;
		}
		Util::addScript(Application::APP_ID, 'public-share');
	}
}
