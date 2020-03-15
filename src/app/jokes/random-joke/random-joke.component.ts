import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from 'src/app/models/joke.model';
import { RandomJokeService } from 'src/app/services/random-joke.service';
import { map, repeatWhen, take, tap, retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent implements OnInit {
  joke: Joke;
  private category: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private randomJokeService: RandomJokeService
  ) {
    this.route.data.subscribe(({ joke }) => {
      this.joke = joke;
    });

    this.category = this.route.snapshot.params.category;
  }

  ngOnInit(): void {}

  onNextJokeClick() {
    this.randomJokeService
      .getRandomJoke(this.category)
      .pipe(
        repeatWhen(joke => joke),
        map(joke => {
          if (this.joke.id === joke.id) {
            throw new Error();
          }

          return joke;
        }),
        take(1),
        retry(4),
        catchError(() =>
          of(this.joke).pipe(
            tap(() => console.error(`couldnt take another different joke!!!`))
          )
        )
      )
      .subscribe(joke => (this.joke = joke));
  }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
