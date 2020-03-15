import { TestBed } from '@angular/core/testing';

import { JokeResolverService } from './joke-resolver.service';
import { HttpClientModule } from '@angular/common/http';

describe('JokeResolverService', () => {
  let service: JokeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JokeResolverService],
    });
    service = TestBed.inject(JokeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
