//import Parse, { Query} from 'parse';
const Parse = require('parse');

Parse.initialize("dsXH3syuEuuIZvXi1niEtX49LLil50JK5oIBcLM3");
Parse.serverURL = 'https://eventz-parse.azurewebsites.net/parse/';

export class EventListService {
    getEventz = () => {
        let query = new Parse.Query('EventZ');
        query.equalTo('organizer', 'Mark');
        let subscription = query.subscribe();


        // const query = new Parse.Query('EventZ');
        // const subscription = query.subscribe();
        console.log(subscription);

        Parse.LiveQuery.on('open', () => {
            console.log('socket connection established');
        });

        Parse.LiveQuery.on('close', () => {
            console.log('socket connection closed');
        });

        subscription.on('open', () => {
            console.log('subscription opened');
        });

        subscription.on('close', () => {
            console.log('subscription closed');
        });

        subscription.on('create', (object: any) => {
            console.log('object created: ');
            console.log(object);
        });

        subscription.on('update', (object: any) => {
            console.log('object updated');
        });

        subscription.on('enter', (object: any) => {
            console.log('object entered');
        });

        subscription.on('leave', (object: any) => {
            console.log('object left');
        });

        subscription.on('delete', (object: any) => {
            console.log('object deleted');
        });

        query.find().then(results => {
            console.log(results);
        });
    }
}

export default angular.module('eventListService', [])
    .service('EventListService', EventListService);
