import { TestBed } from '@angular/core/testing';

import { LocalstorageResolver } from './localstorage.resolver';

describe('LocalstorageResolver', () => {
  let resolver: LocalstorageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LocalstorageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
