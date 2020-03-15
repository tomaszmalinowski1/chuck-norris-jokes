import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [CommonModule, CategoriesRoutingModule, HttpClientModule],
  exports: [CategoryListComponent],
})
export class CategoriesModule {}
