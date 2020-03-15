import { TestBed } from '@angular/core/testing';

import { JokeResolverService } from './joke-resolver.service';

describe('JokeResolverService', () => {
  let service: JokeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
