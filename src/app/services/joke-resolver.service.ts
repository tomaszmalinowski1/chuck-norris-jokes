import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Joke } from '../models/joke.model';
import { RandomJokeService } from './random-joke.service';

@Injectable({
  providedIn: 'root',
})
export class JokeResolverService implements Resolve<Observable<Joke>> {
  constructor(private randomJokeService: RandomJokeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Joke> {
    const { category } = route.params;
    return this.randomJokeService.getRandomJoke(category).pipe(
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
