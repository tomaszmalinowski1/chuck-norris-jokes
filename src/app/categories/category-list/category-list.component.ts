import { Component, OnInit } from '@angular/core';
import { CategoryListService } from 'src/app/services/category-list.service';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories$: BehaviorSubject<string[]>;

  constructor(
    private categoryListService: CategoryListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories$ = this.categoryListService.categories$;

    this.route.data.subscribe(({ categories }) => {
      this.categories$.next(categories);
    });
  }

  ngOnInit() {}

  onButtonClick(category: string) {
    this.router.navigateByUrl(`/jokes/${category.toLowerCase()}`);
  }
}
