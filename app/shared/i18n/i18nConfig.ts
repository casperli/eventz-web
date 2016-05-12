import 'angular-translate';
import 'angular-translate-loader-static-files';

const translateConfig = ($translateProvider: ng.translate.ITranslateProvider) => {
    $translateProvider.useStaticFilesLoader({
      prefix: './i18n/',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  };

export default angular.module('config_i18n', ['pascalprecht.translate'])
    .config(translateConfig);
