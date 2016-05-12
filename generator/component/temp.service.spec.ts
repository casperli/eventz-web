import { <%= upCaseName %>Service } from './<%= name %>.service';

describe('<%= upCaseName %>Service', () => {
  let <%= name %>Service: <%= upCaseName %>Service;

  beforeEach(() => {
    <%= name %>Service = new <%= upCaseName %>Service();
  });

  it('should return World', () => {
    const result = <%= name %>Service.getTitle();
    
    expect(result).toBe('World');
  });
});