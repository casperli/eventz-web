export class <%= upCaseName %>Service {
    getTitle() {
        return 'World';
    }
}

export default angular.module('<%= name %>Service', [])
.service('<%= upCaseName %>Service', <%= upCaseName %>Service);
