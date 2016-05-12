import EventListServiceModule, { EventListService } from './eventList.service';

const modules: angular.IModule[] = [
    EventListServiceModule
];

export class EventListController {

    title: string;

    /*@ngInject*/
    constructor(EventListService: EventListService) {
        EventListService.getEventz();
    }
}

const component: IExtendedComponentOptions = {
    bindings: {},
    controller: EventListController,
    template: require('./eventList.html'),
    styles: require('./eventList.less')
}

export default angular.module('component_eventList', modules.map(m => m.name))
.component('eventList', component);