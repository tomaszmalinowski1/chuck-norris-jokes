import { TestBed } from '@angular/core/testing';

import { CategoryListService } from './category-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoryListService', () => {
  let service: CategoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CategoryListService],
    });
    service = TestBed.inject(CategoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
