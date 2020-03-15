import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListComponent } from './category-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RandomJokeComponent } from 'src/app/jokes/random-joke/random-joke.component';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: ':category', component: RandomJokeComponent },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onButtonClick', () => {
    spy = spyOn(component, 'onButtonClick');
    component.onButtonClick('dev');
    expect(spy).toHaveBeenCalled();
  });
});
