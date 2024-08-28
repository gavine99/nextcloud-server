<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitTheming
{
    public static $prefixLengthsPsr4 = array (
        'O' => 
        array (
            'OCA\\Theming\\' => 12,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'OCA\\Theming\\' => 
        array (
            0 => __DIR__ . '/..' . '/../lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'OCA\\Theming\\AppInfo\\Application' => __DIR__ . '/..' . '/../lib/AppInfo/Application.php',
        'OCA\\Theming\\Capabilities' => __DIR__ . '/..' . '/../lib/Capabilities.php',
        'OCA\\Theming\\Command\\UpdateConfig' => __DIR__ . '/..' . '/../lib/Command/UpdateConfig.php',
        'OCA\\Theming\\Controller\\IconController' => __DIR__ . '/..' . '/../lib/Controller/IconController.php',
        'OCA\\Theming\\Controller\\ThemingController' => __DIR__ . '/..' . '/../lib/Controller/ThemingController.php',
        'OCA\\Theming\\Controller\\UserThemeController' => __DIR__ . '/..' . '/../lib/Controller/UserThemeController.php',
        'OCA\\Theming\\ITheme' => __DIR__ . '/..' . '/../lib/ITheme.php',
        'OCA\\Theming\\IconBuilder' => __DIR__ . '/..' . '/../lib/IconBuilder.php',
        'OCA\\Theming\\ImageManager' => __DIR__ . '/..' . '/../lib/ImageManager.php',
        'OCA\\Theming\\Jobs\\MigrateBackgroundImages' => __DIR__ . '/..' . '/../lib/Jobs/MigrateBackgroundImages.php',
        'OCA\\Theming\\Listener\\BeforePreferenceListener' => __DIR__ . '/..' . '/../lib/Listener/BeforePreferenceListener.php',
        'OCA\\Theming\\Listener\\BeforeTemplateRenderedListener' => __DIR__ . '/..' . '/../lib/Listener/BeforeTemplateRenderedListener.php',
        'OCA\\Theming\\Migration\\InitBackgroundImagesMigration' => __DIR__ . '/..' . '/../lib/Migration/InitBackgroundImagesMigration.php',
        'OCA\\Theming\\Migration\\SeparatePrimaryColorAndBackground' => __DIR__ . '/..' . '/../lib/Migration/SeparatePrimaryColorAndBackground.php',
        'OCA\\Theming\\ResponseDefinitions' => __DIR__ . '/..' . '/../lib/ResponseDefinitions.php',
        'OCA\\Theming\\Service\\BackgroundService' => __DIR__ . '/..' . '/../lib/Service/BackgroundService.php',
        'OCA\\Theming\\Service\\JSDataService' => __DIR__ . '/..' . '/../lib/Service/JSDataService.php',
        'OCA\\Theming\\Service\\ThemeInjectionService' => __DIR__ . '/..' . '/../lib/Service/ThemeInjectionService.php',
        'OCA\\Theming\\Service\\ThemesService' => __DIR__ . '/..' . '/../lib/Service/ThemesService.php',
        'OCA\\Theming\\Settings\\Admin' => __DIR__ . '/..' . '/../lib/Settings/Admin.php',
        'OCA\\Theming\\Settings\\AdminSection' => __DIR__ . '/..' . '/../lib/Settings/AdminSection.php',
        'OCA\\Theming\\Settings\\Personal' => __DIR__ . '/..' . '/../lib/Settings/Personal.php',
        'OCA\\Theming\\Settings\\PersonalSection' => __DIR__ . '/..' . '/../lib/Settings/PersonalSection.php',
        'OCA\\Theming\\SetupChecks\\PhpImagickModule' => __DIR__ . '/..' . '/../lib/SetupChecks/PhpImagickModule.php',
        'OCA\\Theming\\Themes\\CommonThemeTrait' => __DIR__ . '/..' . '/../lib/Themes/CommonThemeTrait.php',
        'OCA\\Theming\\Themes\\DarkHighContrastTheme' => __DIR__ . '/..' . '/../lib/Themes/DarkHighContrastTheme.php',
        'OCA\\Theming\\Themes\\DarkTheme' => __DIR__ . '/..' . '/../lib/Themes/DarkTheme.php',
        'OCA\\Theming\\Themes\\DefaultTheme' => __DIR__ . '/..' . '/../lib/Themes/DefaultTheme.php',
        'OCA\\Theming\\Themes\\DyslexiaFont' => __DIR__ . '/..' . '/../lib/Themes/DyslexiaFont.php',
        'OCA\\Theming\\Themes\\HighContrastTheme' => __DIR__ . '/..' . '/../lib/Themes/HighContrastTheme.php',
        'OCA\\Theming\\Themes\\LightTheme' => __DIR__ . '/..' . '/../lib/Themes/LightTheme.php',
        'OCA\\Theming\\ThemingDefaults' => __DIR__ . '/..' . '/../lib/ThemingDefaults.php',
        'OCA\\Theming\\Util' => __DIR__ . '/..' . '/../lib/Util.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitTheming::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitTheming::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitTheming::$classMap;

        }, null, ClassLoader::class);
    }
}
