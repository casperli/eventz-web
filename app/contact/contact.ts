const modules: angular.IModule[] = [];

export class ContactController {
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: ContactController,
    template: require('./contact.html')
}

export default angular.module('component_contact', modules.map(m => m.name))
    .component('contact', component);
