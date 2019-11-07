import { TestBed } from '@angular/core/testing';

import { ProductReviewsService } from './product-reviews.service';

describe('ProductReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductReviewsService = TestBed.get(ProductReviewsService);
    expect(service).toBeTruthy();
  });
});
