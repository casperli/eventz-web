import Contact, { ContactController } from './contact';

describe('App', () => {
  let $rootScope: ng.IRootScopeService;
  let $compile: ng.ICompileService;

  beforeEach(angular.mock.module(Contact.name));
  beforeEach(angular.mock.inject((_$rootScope_: ng.IRootScopeService, _$compile_: ng.ICompileService) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    it('shows the phone number', () => {
      let element = $compile("<contact></contact>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Call");
    });
  });

  describe('Controller', () => {
    it('has a name property [REMOVE]', () => {
      let controller = new ContactController();
      //expect(controller.title).toBe('World');
    });
  });
});