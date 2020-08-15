import { TestBed } from '@angular/core/testing';

import { ContectServiceService } from './contect-service.service';

describe('ContectServiceService', () => {
  let service: ContectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
