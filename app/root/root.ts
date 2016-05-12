require('@angular/router/angular1/angular_1_router');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');

import I18n from '../shared/i18n/i18nConfig';
import Navbar from './navbar/navbar';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import EventList from '../eventList/eventList'

const modules: angular.IModule[] = [I18n, Navbar, Home, About, Contact, EventList];

export class RootController {
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: RootController,
    template: require('./root.html'),
    $routeConfig: [
        { path: '/home', name: 'Home', component: 'home', useAsDefault: true },
        { path: '/about', name: 'About', component: 'about' },
        { path: '/contact', name: 'Contact', component: 'contact' },
        { path: '/eventList', name: 'EventZ', component: 'eventList' }
    ]
}

export default angular.module('component_root', ['ngComponentRouter', 'ui.bootstrap', ...modules.map(m => m.name)])
    .value('$routerRootComponent', 'root')
    .component('root', component);
