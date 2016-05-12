export class HomeService {
    getTitle() {
        return 'World';
    }
}

export default angular.module('homeService', [])
.service('HomeService', HomeService);
