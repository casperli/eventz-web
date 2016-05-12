import About, { AboutController } from './about';

describe('About', () => {
  let $rootScope: ng.IRootScopeService;
  let $compile: ng.ICompileService;

  beforeEach(angular.mock.module(About.name));
  beforeEach(angular.mock.inject((_$rootScope_: ng.IRootScopeService, _$compile_: ng.ICompileService) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    it('shows the about text', () => {
      let element = $compile("<about></about>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("About this application");
    });
  });
});