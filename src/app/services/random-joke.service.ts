import { Injectable } from '@angular/core';
import { CHUCK_NORRIS_API } from './services-consts';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Joke } from '../models/joke.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomJokeService {
  jokes$ = new BehaviorSubject<Joke>(null);
  constructor(private httpClient: HttpClient) {}

  getRandomJoke(category: string): Observable<Joke> {
    return this.httpClient
      .get<Joke>(`${CHUCK_NORRIS_API}/jokes/random?category=${category}`)
      .pipe(
        map(joke => joke),
        tap(joke => {
          this.jokes$.next(joke);
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }
}
