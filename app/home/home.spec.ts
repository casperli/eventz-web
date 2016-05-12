import Home from './home';

describe('Home', () => {
  let $rootScope: ng.IRootScopeService;
  let $compile: ng.ICompileService;

  beforeEach(angular.mock.module(Home.name));
  beforeEach(angular.mock.inject((_$rootScope_: ng.IRootScopeService, _$compile_: ng.ICompileService) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    it('shows the welcome text', () => {
      let element = $compile("<home></home>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("You just used the hatch generator");
    });
  });
});