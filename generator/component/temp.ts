import <%= upCaseName %>ServiceModule, { <%= upCaseName %>Service } from './<%= name %>.service';

const modules: angular.IModule[] = [
    <%= upCaseName %>ServiceModule
];

export class <%= upCaseName %>Controller {

    title: string;

    /*@ngInject*/
    constructor(<%= upCaseName %>Service: <%= upCaseName %>Service) {
        this.title = <%= upCaseName %>Service.getTitle();
    }
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: <%= upCaseName %>Controller,
    template: require('./<%= name %>.html'),
    styles: require('./<%= name %>.less')
}

export default angular.module('component_<%= name %>', modules.map(m => m.name))
.component('<%= name %>', component);