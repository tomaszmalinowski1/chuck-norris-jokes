import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomJokeComponent } from './random-joke.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RandomJokeService } from 'src/app/services/random-joke.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Joke } from 'src/app/models/joke.model';
import { inspect } from 'util';

let jokeExample = {
  categories: ['dev'],
  created_at: '2020-01-05 13:42:19.324003',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'oe071v9ht0qphuzwgzxaoq',
  updated_at: '2020-01-05 13:42:19.324003',
  url: 'https://api.chucknorris.io/jokes/oe071v9ht0qphuzwgzxaoq',
  value: "If you try to kill -9 Chuck Norris's programs, it backfires.",
};

describe('RandomJokeComponent', () => {
  let component: RandomJokeComponent;
  let randomJokeService: RandomJokeService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let fixture: ComponentFixture<RandomJokeComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomJokeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        RandomJokeService,
        {
          provide: ActivatedRoute,

          useValue: {
            data: of({ joke: jokeExample }),
            snapshot: { params: { category: 'dev' } },
          },
        },
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    randomJokeService = TestBed.get(RandomJokeService);
    activatedRoute = TestBed.get(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onBackClick', () => {
    spy = spyOn(component, 'onBackClick');
    component.onBackClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should have onNextJokeClick', () => {
    spy = spyOn(component, 'onNextJokeClick');
    component.onNextJokeClick();
    expect(spy).toHaveBeenCalled();
  });
});
