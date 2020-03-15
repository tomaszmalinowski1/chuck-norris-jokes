import { TestBed } from '@angular/core/testing';

import { RandomJokeService } from './random-joke.service';
import { HttpClientModule } from '@angular/common/http';
import { Joke } from '../models/joke.model';

describe('RandomJokeService', () => {
  let service: RandomJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RandomJokeService],
    });
    service = TestBed.inject(RandomJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should download a new joke', (done: DoneFn) => {
    service.getRandomJoke('dev').subscribe(joke => {
      expect(joke).not.toBe(null);
      done();
    });
  });
});
