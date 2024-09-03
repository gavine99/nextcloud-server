<?php
/**
 * SPDX-FileCopyrightText: 2017-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\Files_Sharing\Tests\Controllers;

use OC\Files\Filesystem;
use OC\Files\Node\Folder;
use OC\Share20\Manager;
use OCA\FederatedFileSharing\FederatedShareProvider;
use OCA\Files_Sharing\Controller\ShareController;
use OCA\Files_Sharing\DefaultPublicShareTemplateProvider;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\Accounts\IAccount;
use OCP\Accounts\IAccountManager;
use OCP\Accounts\IAccountProperty;
use OCP\Activity\IManager;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\Template\ExternalShareMenuAction;
use OCP\AppFramework\Http\Template\PublicTemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\Constants;
use OCP\Defaults;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\Files\Storage;
use OCP\IAppConfig;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IPreview;
use OCP\IRequest;
use OCP\ISession;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\IUserManager;
use OCP\Security\ISecureRandom;
use OCP\Share\Exceptions\ShareNotFound;
use OCP\Share\IPublicShareTemplateFactory;
use OCP\Share\IShare;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * @group DB
 *
 * @package OCA\Files_Sharing\Controllers
 */
class ShareControllerTest extends \Test\TestCase {

	private string $user;
	private string $oldUser;
	private string $appName = 'files_sharing';
	private ShareController $shareController;

	private IL10N&MockObject $l10n;
	private IConfig&MockObject $config;
	private ISession&MockObject $session;
	private Defaults&MockObject $defaults;
	private IAppConfig&MockObject $appConfig;
	private Manager&MockObject $shareManager;
	private IPreview&MockObject $previewManager;
	private IUserManager&MockObject $userManager;
	private IInitialState&MockObject $initialState;
	private IURLGenerator&MockObject $urlGenerator;
	private ISecureRandom&MockObject $secureRandom;
	private IAccountManager&MockObject $accountManager;
	private IEventDispatcher&MockObject $eventDispatcher;
	private FederatedShareProvider&MockObject $federatedShareProvider;
	private IPublicShareTemplateFactory&MockObject $publicShareTemplateFactory;

	protected function setUp(): void {
		parent::setUp();
		$this->appName = 'files_sharing';

		$this->shareManager = $this->createMock(Manager::class);
		$this->urlGenerator = $this->createMock(IURLGenerator::class);
		$this->session = $this->createMock(ISession::class);
		$this->previewManager = $this->createMock(IPreview::class);
		$this->config = $this->createMock(IConfig::class);
		$this->appConfig = $this->createMock(IAppConfig::class);
		$this->userManager = $this->createMock(IUserManager::class);
		$this->initialState = $this->createMock(IInitialState::class);
		$this->federatedShareProvider = $this->createMock(FederatedShareProvider::class);
		$this->federatedShareProvider->expects($this->any())
			->method('isOutgoingServer2serverShareEnabled')->willReturn(true);
		$this->federatedShareProvider->expects($this->any())
			->method('isIncomingServer2serverShareEnabled')->willReturn(true);
		$this->accountManager = $this->createMock(IAccountManager::class);
		$this->eventDispatcher = $this->createMock(IEventDispatcher::class);
		$this->l10n = $this->createMock(IL10N::class);
		$this->secureRandom = $this->createMock(ISecureRandom::class);
		$this->defaults = $this->createMock(Defaults::class);
		$this->publicShareTemplateFactory = $this->createMock(IPublicShareTemplateFactory::class);
		$this->publicShareTemplateFactory
			->expects($this->any())
			->method('getProvider')
			->willReturn(
				new DefaultPublicShareTemplateProvider(
					$this->userManager,
					$this->accountManager,
					$this->previewManager,
					$this->federatedShareProvider,
					$this->urlGenerator,
					$this->eventDispatcher,
					$this->l10n,
					$this->defaults,
					$this->config,
					$this->createMock(IRequest::class),
					$this->initialState,
					$this->appConfig,
				)
			);

		$this->shareController = new \OCA\Files_Sharing\Controller\ShareController(
			$this->appName,
			$this->createMock(IRequest::class),
			$this->config,
			$this->urlGenerator,
			$this->userManager,
			$this->createMock(IManager::class),
			$this->shareManager,
			$this->session,
			$this->previewManager,
			$this->createMock(IRootFolder::class),
			$this->federatedShareProvider,
			$this->accountManager,
			$this->eventDispatcher,
			$this->l10n,
			$this->secureRandom,
			$this->defaults,
			$this->publicShareTemplateFactory,
		);


		// Store current user
		$this->oldUser = \OC_User::getUser();

		// Create a dummy user
		$this->user = \OC::$server->getSecureRandom()->generate(12, ISecureRandom::CHAR_LOWER);

		\OC::$server->getUserManager()->createUser($this->user, $this->user);
		\OC_Util::tearDownFS();
		$this->loginAsUser($this->user);
	}

	protected function tearDown(): void {
		\OC_Util::tearDownFS();
		\OC_User::setUserId('');
		Filesystem::tearDown();
		$user = \OC::$server->getUserManager()->get($this->user);
		if ($user !== null) {
			$user->delete();
		}
		\OC_User::setIncognitoMode(false);

		\OC::$server->getSession()->set('public_link_authenticated', '');

		// Set old user
		\OC_User::setUserId($this->oldUser);
		\OC_Util::setupFS($this->oldUser);
		parent::tearDown();
	}

	public function testShowShareInvalidToken() {
		$this->shareController->setToken('invalidtoken');

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('invalidtoken')
			->will($this->throwException(new ShareNotFound()));

		$this->expectException(NotFoundException::class);

		// Test without a not existing token
		$this->shareController->showShare();
	}

	public function testShowShareNotAuthenticated() {
		$this->shareController->setToken('validtoken');

		$share = \OC::$server->getShareManager()->newShare();
		$share->setPassword('password');

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('validtoken')
			->willReturn($share);

		$this->expectException(NotFoundException::class);

		// Test without a not existing token
		$this->shareController->showShare();
	}


	public function testShowShare() {
		$note = 'personal note';
		$filename = 'file1.txt';

		$this->shareController->setToken('token');

		$owner = $this->createMock(IUser::class);
		$owner->method('getDisplayName')->willReturn('ownerDisplay');
		$owner->method('getUID')->willReturn('ownerUID');
		$owner->method('isEnabled')->willReturn(true);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('getDisplayName')->willReturn('initiatorDisplay');
		$initiator->method('getUID')->willReturn('initiatorUID');
		$initiator->method('isEnabled')->willReturn(true);

		$file = $this->createMock(File::class);
		$file->method('getName')->willReturn($filename);
		$file->method('getMimetype')->willReturn('text/plain');
		$file->method('getSize')->willReturn(33);
		$file->method('isReadable')->willReturn(true);
		$file->method('isShareable')->willReturn(true);
		$file->method('getId')->willReturn(111);

		$accountName = $this->createMock(IAccountProperty::class);
		$accountName->method('getScope')
			->willReturn(IAccountManager::SCOPE_PUBLISHED);
		$account = $this->createMock(IAccount::class);
		$account->method('getProperty')
			->with(IAccountManager::PROPERTY_DISPLAYNAME)
			->willReturn($accountName);
		$this->accountManager->expects($this->once())
			->method('getAccount')
			->with($owner)
			->willReturn($account);

		/** @var Manager */
		$manager = \OCP\Server::get(Manager::class);
		$share = $manager->newShare();
		$share->setId(42)
			->setPermissions(Constants::PERMISSION_READ | Constants::PERMISSION_UPDATE)
			->setPassword('password')
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($file)
			->setNote($note)
			->setTarget("/$filename")
			->setToken('token');

		$this->session->method('exists')->with('public_link_authenticated')->willReturn(true);
		$this->session->method('get')->with('public_link_authenticated')->willReturn('42');

		$this->urlGenerator->expects(self::exactly(2))
			->method('linkToRouteAbsolute')
			->willReturnMap([
				// every file has the show show share url in the opengraph url prop
				['files_sharing.sharecontroller.showShare', ['token' => 'token'], 'shareUrl'],
				// this share is not an image to the default preview is used
				['files_sharing.PublicPreview.getPreview', ['x' => 256, 'y' => 256, 'file' => $share->getTarget(), 'token' => 'token'], 'previewUrl'],
			]);

		$this->previewManager->method('isMimeSupported')->with('text/plain')->willReturn(true);

		$this->config->method('getSystemValue')
			->willReturnMap(
				[
					['max_filesize_animated_gifs_public_sharing', 10, 10],
					['enable_previews', true, true],
					['preview_max_x', 1024, 1024],
					['preview_max_y', 1024, 1024],
				]
			);

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->eventDispatcher->method('dispatchTyped')->with(
			$this->callback(function ($event) use ($share) {
				if ($event instanceof BeforeTemplateRenderedEvent) {
					return $event->getShare() === $share;
				} else {
					return true;
				}
			})
		);

		$this->l10n->expects($this->any())
			->method('t')
			->willReturnCallback(function ($text, $parameters) {
				return vsprintf($text, $parameters);
			});

		$this->defaults->expects(self::any())
			->method('getProductName')
			->willReturn('Nextcloud');

		// Ensure the correct initial state is setup
		// Shared node is a file so this is a single file share:
		$view = 'public-file-share';
		// Set up initial state
		$initialState = [];
		$this->initialState->expects(self::any())
			->method('provideInitialState')
			->willReturnCallback(function ($key, $value) use (&$initialState) {
				$initialState[$key] = $value;
			});
		$expectedInitialState = [
			'isPublic' => true,
			'sharingToken' => 'token',
			'sharePermissions' => (Constants::PERMISSION_READ | Constants::PERMISSION_UPDATE),
			'filename' => $filename,
			'view' => $view,
		];

		$response = $this->shareController->showShare();

		$this->assertEquals($expectedInitialState, $initialState);

		$csp = new \OCP\AppFramework\Http\ContentSecurityPolicy();
		$csp->addAllowedFrameDomain('\'self\'');
		$expectedResponse = new PublicTemplateResponse('files', 'index');
		$expectedResponse->setContentSecurityPolicy($csp);
		$expectedResponse->setHeaderTitle($filename);
		$expectedResponse->setHeaderDetails('shared by ownerDisplay');
		$expectedResponse->setHeaderActions([
			new ExternalShareMenuAction($this->l10n->t('Add to your Nextcloud'), 'icon-external', 'owner', 'ownerDisplay', $filename),
		]);

		$this->assertEquals($expectedResponse, $response);
	}

	public function testShowFileDropShare() {
		$filename = 'folder1';

		$this->shareController->setToken('token');

		$owner = $this->createMock(IUser::class);
		$owner->method('getDisplayName')->willReturn('ownerDisplay');
		$owner->method('getUID')->willReturn('ownerUID');
		$owner->method('isEnabled')->willReturn(true);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('getDisplayName')->willReturn('initiatorDisplay');
		$initiator->method('getUID')->willReturn('initiatorUID');
		$initiator->method('isEnabled')->willReturn(true);

		$file = $this->createMock(Folder::class);
		$file->method('isReadable')->willReturn(true);
		$file->method('isShareable')->willReturn(true);
		$file->method('getId')->willReturn(1234);
		$file->method('getName')->willReturn($filename);

		$accountName = $this->createMock(IAccountProperty::class);
		$accountName->method('getScope')
			->willReturn(IAccountManager::SCOPE_PUBLISHED);
		$account = $this->createMock(IAccount::class);
		$account->method('getProperty')
			->with(IAccountManager::PROPERTY_DISPLAYNAME)
			->willReturn($accountName);
		$this->accountManager->expects($this->once())
			->method('getAccount')
			->with($owner)
			->willReturn($account);

		/** @var Manager */
		$manager = \OCP\Server::get(Manager::class);
		$share = $manager->newShare();
		$share->setId(42)
			->setPermissions(Constants::PERMISSION_CREATE)
			->setPassword('password')
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($file)
			->setTarget("/$filename")
			->setToken('token');

		$this->appConfig
			->expects($this->once())
			->method('getValueString')
			->with('core', 'shareapi_public_link_disclaimertext', '')
			->willReturn('My disclaimer text');

		$this->session->method('exists')->with('public_link_authenticated')->willReturn(true);
		$this->session->method('get')->with('public_link_authenticated')->willReturn('42');

		$this->urlGenerator->expects(self::once())
			->method('linkToRouteAbsolute')
			->willReturnMap([
				// every file has the show show share url in the opengraph url prop
				['files_sharing.sharecontroller.showShare', ['token' => 'token'], 'shareUrl'],
				// there is no preview or folders so no other link for opengraph
			]);

		$this->config->method('getSystemValue')
			->willReturnMap(
				[
					['max_filesize_animated_gifs_public_sharing', 10, 10],
					['enable_previews', true, true],
					['preview_max_x', 1024, 1024],
					['preview_max_y', 1024, 1024],
				]
			);

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->eventDispatcher->method('dispatchTyped')->with(
			$this->callback(function ($event) use ($share) {
				if ($event instanceof BeforeTemplateRenderedEvent) {
					return $event->getShare() === $share;
				} else {
					return true;
				}
			})
		);

		$this->l10n->expects($this->any())
			->method('t')
			->willReturnCallback(function ($text, $parameters) {
				return vsprintf($text, $parameters);
			});

		// Set up initial state
		$initialState = [];
		$this->initialState->expects(self::any())
			->method('provideInitialState')
			->willReturnCallback(function ($key, $value) use (&$initialState) {
				$initialState[$key] = $value;
			});
		$expectedInitialState = [
			'isPublic' => true,
			'sharingToken' => 'token',
			'sharePermissions' => Constants::PERMISSION_CREATE,
			'filename' => $filename,
			'view' => 'public-file-drop',
			'disclaimer' => 'My disclaimer text',
		];

		$response = $this->shareController->showShare();

		$this->assertEquals($expectedInitialState, $initialState);

		$csp = new \OCP\AppFramework\Http\ContentSecurityPolicy();
		$csp->addAllowedFrameDomain('\'self\'');
		$expectedResponse = new PublicTemplateResponse('files', 'index');
		$expectedResponse->setContentSecurityPolicy($csp);
		$expectedResponse->setHeaderTitle($filename);
		$expectedResponse->setHeaderDetails('shared by ownerDisplay');

		$this->assertEquals($expectedResponse, $response);
	}

	public function testShowShareWithPrivateName() {
		$note = 'personal note';
		$filename = 'file1.txt';

		$this->shareController->setToken('token');

		$owner = $this->createMock(IUser::class);
		$owner->method('getDisplayName')->willReturn('ownerDisplay');
		$owner->method('getUID')->willReturn('ownerUID');
		$owner->method('isEnabled')->willReturn(true);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('getDisplayName')->willReturn('initiatorDisplay');
		$initiator->method('getUID')->willReturn('initiatorUID');
		$initiator->method('isEnabled')->willReturn(true);

		$file = $this->createMock(File::class);
		$file->method('getName')->willReturn($filename);
		$file->method('getMimetype')->willReturn('text/plain');
		$file->method('getSize')->willReturn(33);
		$file->method('isReadable')->willReturn(true);
		$file->method('isShareable')->willReturn(true);
		$file->method('getId')->willReturn(111);

		$accountName = $this->createMock(IAccountProperty::class);
		$accountName->method('getScope')
			->willReturn(IAccountManager::SCOPE_LOCAL);
		$account = $this->createMock(IAccount::class);
		$account->method('getProperty')
			->with(IAccountManager::PROPERTY_DISPLAYNAME)
			->willReturn($accountName);
		$this->accountManager->expects($this->once())
			->method('getAccount')
			->with($owner)
			->willReturn($account);

		$share = \OC::$server->getShareManager()->newShare();
		$share->setId(42);
		$share->setPassword('password')
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($file)
			->setNote($note)
			->setToken('token')
			->setTarget("/$filename");

		$this->session->method('exists')->with('public_link_authenticated')->willReturn(true);
		$this->session->method('get')->with('public_link_authenticated')->willReturn('42');

		$this->urlGenerator->expects(self::exactly(2))
			->method('linkToRouteAbsolute')
			->willReturnMap([
				// every file has the show show share url in the opengraph url prop
				['files_sharing.sharecontroller.showShare', ['token' => 'token'], 'shareUrl'],
				// this share is not an image to the default preview is used
				['files_sharing.PublicPreview.getPreview', ['x' => 256, 'y' => 256, 'file' => $share->getTarget(), 'token' => 'token'], 'previewUrl'],
			]);

		$this->previewManager->method('isMimeSupported')->with('text/plain')->willReturn(true);

		$this->config->method('getSystemValue')
			->willReturnMap(
				[
					['max_filesize_animated_gifs_public_sharing', 10, 10],
					['enable_previews', true, true],
					['preview_max_x', 1024, 1024],
					['preview_max_y', 1024, 1024],
				]
			);
		$shareTmpl['maxSizeAnimateGif'] = $this->config->getSystemValue('max_filesize_animated_gifs_public_sharing', 10);
		$shareTmpl['previewEnabled'] = $this->config->getSystemValue('enable_previews', true);

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->eventDispatcher->method('dispatchTyped')->with(
			$this->callback(function ($event) use ($share) {
				if ($event instanceof BeforeTemplateRenderedEvent) {
					return $event->getShare() === $share;
				} else {
					return true;
				}
			})
		);

		$this->l10n->expects($this->any())
			->method('t')
			->will($this->returnCallback(function ($text, $parameters) {
				return vsprintf($text, $parameters);
			}));

		$this->defaults->expects(self::any())
			->method('getProductName')
			->willReturn('Nextcloud');

		$response = $this->shareController->showShare();

		$csp = new \OCP\AppFramework\Http\ContentSecurityPolicy();
		$csp->addAllowedFrameDomain('\'self\'');
		$expectedResponse = new PublicTemplateResponse('files', 'index');
		$expectedResponse->setContentSecurityPolicy($csp);
		$expectedResponse->setHeaderTitle($filename);
		$expectedResponse->setHeaderDetails('');
		$expectedResponse->setHeaderActions([
			new ExternalShareMenuAction($this->l10n->t('Add to your Nextcloud'), 'icon-external', 'owner', 'ownerDisplay', $filename),
		]);

		$this->assertEquals($expectedResponse, $response);
	}

	/**
	 * Checks file drop shares:
	 * - there must not be any header action
	 * - the template param "hideFileList" should be true
	 *
	 * @test
	 * @return void
	 */
	public function testShareFileDrop() {
		$this->shareController->setToken('token');

		$owner = $this->getMockBuilder(IUser::class)->getMock();
		$owner->method('getDisplayName')->willReturn('ownerDisplay');
		$owner->method('getUID')->willReturn('ownerUID');
		$owner->method('isEnabled')->willReturn(true);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('getDisplayName')->willReturn('initiatorDisplay');
		$initiator->method('getUID')->willReturn('initiatorUID');
		$initiator->method('isEnabled')->willReturn(true);

		/* @var MockObject|Storage $storage */
		$storage = $this->getMockBuilder(Storage::class)
			->disableOriginalConstructor()
			->getMock();

		/* @var MockObject|Folder $folder */
		$folder = $this->getMockBuilder(Folder::class)
			->disableOriginalConstructor()
			->getMock();
		$folder->method('getName')->willReturn('/fileDrop');
		$folder->method('isReadable')->willReturn(true);
		$folder->method('isShareable')->willReturn(true);
		$folder->method('getStorage')->willReturn($storage);
		$folder->method('get')->with('')->willReturn($folder);
		$folder->method('getSize')->willReturn(1337);
		$folder->method('getId')->willReturn(111);

		$accountName = $this->createMock(IAccountProperty::class);
		$accountName->method('getScope')
			->willReturn(IAccountManager::SCOPE_PUBLISHED);
		$account = $this->createMock(IAccount::class);
		$account->method('getProperty')
			->with(IAccountManager::PROPERTY_DISPLAYNAME)
			->willReturn($accountName);
		$this->accountManager->expects($this->once())
			->method('getAccount')
			->with($owner)
			->willReturn($account);

		$share = \OC::$server->getShareManager()->newShare();
		$share->setId(42);
		$share->setPermissions(Constants::PERMISSION_CREATE)
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($folder)
			->setTarget('/fileDrop');

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->l10n->expects($this->any())
			->method('t')
			->willReturnCallback(function ($text, $parameters) {
				return vsprintf($text, $parameters);
			});

		$response = $this->shareController->showShare();
		// skip the "folder" param for tests
		$responseParams = $response->getParams();
		unset($responseParams['folder']);
		$response->setParams($responseParams);

		$sharedTmplParams = [
			'filename' => '/fileDrop',
			'shareOwner' => 'ownerDisplay',
		];

		$csp = new \OCP\AppFramework\Http\ContentSecurityPolicy();
		$csp->addAllowedFrameDomain('\'self\'');
		$expectedResponse = new PublicTemplateResponse('files', 'index');
		$expectedResponse->setContentSecurityPolicy($csp);
		$expectedResponse->setHeaderTitle($sharedTmplParams['filename']);
		$expectedResponse->setHeaderDetails('shared by ' . $sharedTmplParams['shareOwner']);

		self::assertEquals($expectedResponse, $response);
	}


	public function testShowShareInvalid() {
		$this->expectException(\OCP\Files\NotFoundException::class);

		$filename = 'file1.txt';
		$this->shareController->setToken('token');

		$owner = $this->getMockBuilder(IUser::class)->getMock();
		$owner->method('getDisplayName')->willReturn('ownerDisplay');
		$owner->method('getUID')->willReturn('ownerUID');

		$file = $this->getMockBuilder('OCP\Files\File')->getMock();
		$file->method('getName')->willReturn($filename);
		$file->method('getMimetype')->willReturn('text/plain');
		$file->method('getSize')->willReturn(33);
		$file->method('isShareable')->willReturn(false);
		$file->method('isReadable')->willReturn(true);

		$share = \OC::$server->getShareManager()->newShare();
		$share->setId(42);
		$share->setPassword('password')
			->setShareOwner('ownerUID')
			->setNode($file)
			->setTarget("/$filename");

		$this->session->method('exists')->with('public_link_authenticated')->willReturn(true);
		$this->session->method('get')->with('public_link_authenticated')->willReturn('42');

		$this->previewManager->method('isMimeSupported')->with('text/plain')->willReturn(true);

		$this->config->method('getSystemValue')
			->willReturnMap(
				[
					['max_filesize_animated_gifs_public_sharing', 10, 10],
					['enable_previews', true, true],
				]
			);
		$shareTmpl['maxSizeAnimateGif'] = $this->config->getSystemValue('max_filesize_animated_gifs_public_sharing', 10);
		$shareTmpl['previewEnabled'] = $this->config->getSystemValue('enable_previews', true);

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->with('ownerUID')->willReturn($owner);

		$this->shareController->showShare();
	}

	public function testDownloadShareWithCreateOnlyShare() {
		$share = $this->getMockBuilder(IShare::class)->getMock();
		$share->method('getPassword')->willReturn('password');
		$share
			->expects($this->once())
			->method('getPermissions')
			->willReturn(\OCP\Constants::PERMISSION_CREATE);

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('validtoken')
			->willReturn($share);

		// Test with a password protected share and no authentication
		$response = $this->shareController->downloadShare('validtoken');
		$expectedResponse = new DataResponse('Share has no read permission');
		$this->assertEquals($expectedResponse, $response);
	}

	public function testDisabledOwner() {
		$this->shareController->setToken('token');

		$owner = $this->getMockBuilder(IUser::class)->getMock();
		$owner->method('isEnabled')->willReturn(false);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('isEnabled')->willReturn(false);

		/* @var MockObject|Folder $folder */
		$folder = $this->createMock(Folder::class);

		$share = \OC::$server->getShareManager()->newShare();
		$share->setId(42);
		$share->setPermissions(Constants::PERMISSION_CREATE)
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($folder)
			->setTarget('/share');

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->expectException(NotFoundException::class);

		$this->shareController->showShare();
	}

	public function testDisabledInitiator() {
		$this->shareController->setToken('token');

		$owner = $this->getMockBuilder(IUser::class)->getMock();
		$owner->method('isEnabled')->willReturn(false);

		$initiator = $this->createMock(IUser::class);
		$initiator->method('isEnabled')->willReturn(true);

		/* @var MockObject|Folder $folder */
		$folder = $this->createMock(Folder::class);

		$share = \OC::$server->getShareManager()->newShare();
		$share->setId(42);
		$share->setPermissions(Constants::PERMISSION_CREATE)
			->setShareOwner('ownerUID')
			->setSharedBy('initiatorUID')
			->setNode($folder)
			->setTarget('/share');

		$this->shareManager
			->expects($this->once())
			->method('getShareByToken')
			->with('token')
			->willReturn($share);

		$this->userManager->method('get')->willReturnCallback(function (string $uid) use ($owner, $initiator) {
			if ($uid === 'ownerUID') {
				return $owner;
			}
			if ($uid === 'initiatorUID') {
				return $initiator;
			}
			return null;
		});

		$this->expectException(NotFoundException::class);

		$this->shareController->showShare();
	}
}
