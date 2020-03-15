import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryListResolverService } from './services/category-list-resolver.service';

const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule),
  },
  {
    path: '',
    component: CategoryListComponent,
    resolve: {
      categories: CategoryListResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
