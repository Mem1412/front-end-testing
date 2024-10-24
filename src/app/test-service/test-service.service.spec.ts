import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';

describe('TestService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
