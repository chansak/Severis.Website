import { TestBed } from '@angular/core/testing';

import { CheckingService } from './checking.service';

describe('CheckingService', () => {
  let service: CheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
