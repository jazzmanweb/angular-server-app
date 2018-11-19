import { TestBed } from '@angular/core/testing';

import { FashionsService } from './fashions.service';

describe('FashionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FashionsService = TestBed.get(FashionsService);
    expect(service).toBeTruthy();
  });
});
