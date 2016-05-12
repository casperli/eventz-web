import { HomeService } from './home.service';

describe('HomeService', () => {
  let homeService: HomeService;

  beforeEach(() => {
    homeService = new HomeService();
  });

  it('should return World', () => {
    const result = homeService.getTitle();
    
    expect(result).toBe('World');
  });
});