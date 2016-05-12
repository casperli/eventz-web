const modules: angular.IModule[] = [];

export class AboutController {
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: AboutController,
    template: require(`./about.html`)
}

export default angular.module('component_about', modules.map(m => m.name))
    .component('about', component);
