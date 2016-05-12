import Root, { RootController } from './root';

describe('Root', () => {
  let $rootScope: ng.IRootScopeService;
  let $compile: ng.ICompileService;

  beforeEach(angular.mock.module(Root.name));
  beforeEach(angular.mock.inject((_$rootScope_: ng.IRootScopeService, _$compile_: ng.ICompileService) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    // it('shows "Hello World"', () => {
    //   let element = $compile("<app></app>")($rootScope);
    //   $rootScope.$digest();
    //   expect(element.html()).toContain("Hello World");
    // });
  });

  describe('Controller', () => {
    it('has a name property [REMOVE]', () => {
      let controller = new RootController();
      //expect(controller.title).toBe('World');
    });
  });
});