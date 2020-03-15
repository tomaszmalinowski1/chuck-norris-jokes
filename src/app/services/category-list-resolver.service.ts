import { Injectable } from '@angular/core';
import { CategoryListService } from './category-list.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryListResolverService {
  constructor(private categoryListService: CategoryListService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<string[]> {
    return this.categoryListService.getCategories().pipe(
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
