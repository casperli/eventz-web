import * as angular from 'angular';
import Root from './root/root';
require('./shared/shared.less');

/**
 * Load config.json without ng dependency
 */
const xhttp = new XMLHttpRequest();
const fileName = 'config.json';
xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
            bootstrapWithConfig(JSON.parse(xhttp.responseText));
        } else {
            console.error(`Error loading configuration file "${fileName}".`);
        }
    }
};
xhttp.open('GET', fileName, true);
xhttp.send();

function bootstrapWithConfig(config: any) {
    const appWithConfig = angular.module('appWithConfig', [Root.name])
    .config(($provide: ng.auto.IProvideService) => {
        /*@ngInject*/
        $provide.value('env', config);
    });

    angular.element(document).ready(() => {
        angular.bootstrap(document, [appWithConfig.name], { strictDi: true });
    });
}
