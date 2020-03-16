import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CHUCK_NORRIS_API } from './services-consts';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryListService {
  categories$ = new BehaviorSubject<string[]>(null);

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(`${CHUCK_NORRIS_API}/jokes/categories`)
      .pipe(
        map(categories => {
          return categories.map(
            category => category.charAt(0).toUpperCase() + category.slice(1)
          );
        }),
        tap(categories => {
          this.categories$.next(categories);
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }
}
