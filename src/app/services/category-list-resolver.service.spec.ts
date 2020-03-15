import { TestBed } from '@angular/core/testing';

import { CategoryListResolverService } from './category-list-resolver.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoryListResolverService', () => {
  let service: CategoryListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CategoryListResolverService],
    });
    service = TestBed.inject(CategoryListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
