const modules: angular.IModule[] = [
];

export class <%= upCaseName %>Controller {

    title: string;

    /*@ngInject*/
    constructor() {
        this.title = 'World';
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