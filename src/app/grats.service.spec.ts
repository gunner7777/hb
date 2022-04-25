import { TestBed } from '@angular/core/testing';

import { GratsService } from './grats.service';

describe('GratsService', () => {
  let service: GratsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GratsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
