import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokeResolverService } from '../services/joke-resolver.service';

const routes: Routes = [
  {
    path: ':category',
    component: RandomJokeComponent,
    resolve: {
      joke: JokeResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokesRoutingModule {}
