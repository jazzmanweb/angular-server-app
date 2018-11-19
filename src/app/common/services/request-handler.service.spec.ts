import { TestBed } from '@angular/core/testing';

import { RequestHandlerService } from './request-handler.service';

describe('FormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestHandlerService = TestBed.get(RequestHandlerService);
    expect(service).toBeTruthy();
  });
});
