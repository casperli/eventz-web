import <%= upCaseName %> from './<%= name %>';

describe('<%= upCaseName %>', () => {
  let $rootScope: ng.IRootScopeService;
  let $compile: ng.ICompileService;

  beforeEach(angular.mock.module(<%= upCaseName %>.name));
  beforeEach(angular.mock.inject((_$rootScope_: ng.IRootScopeService, _$compile_: ng.ICompileService) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('Component', () => {
    it('shows the paragraph text', () => {
      let element = $compile('<<%= name %>></<%= name %>>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('This is the page for <span class="<%= name %>-title"><%= upCaseName %></span>');
    });
  });
});