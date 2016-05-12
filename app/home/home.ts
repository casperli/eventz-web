import HomeServiceModule, { HomeService } from './home.service';

const modules: angular.IModule[] = [
    HomeServiceModule
];

export class HomeController {

    title: string;

    /*@ngInject*/
    constructor(HomeService: HomeService) {
        this.title = HomeService.getTitle();
    }
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: HomeController,
    template: require('./home.html'),
    styles: require('./home.less')
}

export default angular.module('component_home', modules.map(m => m.name))
.component('home', component);
