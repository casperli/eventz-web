const modules: angular.IModule[] = [];

interface IZuehlkeRepoInfo {
    name: string;
    description: string;
    html_url: string;
}

export class GithubRepoService {
    private reposUrl: string;

    /*@ngInject*/
    constructor(private $http: angular.IHttpService) {
        this.reposUrl = 'https://api.github.com/orgs/Zuehlke' + '/repos';
    }

    getZuehlkeRepos(): angular.IPromise<IZuehlkeRepoInfo[]> {
        return this.$http.get<IZuehlkeRepoInfo[]>(this.reposUrl)
        .then(r => {
            return r.data;
        });
    }
}

export default angular.module('service_GithubRepoService', [])
.service('GithubRepoService', GithubRepoService);
