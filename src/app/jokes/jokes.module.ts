import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { RandomJokeComponent } from './random-joke/random-joke.component';


@NgModule({
  declarations: [RandomJokeComponent],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
