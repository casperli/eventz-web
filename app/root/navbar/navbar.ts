const modules: angular.IModule[] = [];

const component: any = {
    bindings: {},
    controller: () => {},
    template: require(`./navbar.html`)
}

export default angular.module('component_navbar', modules.map(m => m.name))
    .component('navbar', component);
