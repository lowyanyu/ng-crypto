import { TestBed } from '@angular/core/testing';

import { NgCryptoService } from './ng-crypto.service';

describe('NgCryptoService', () => {
  let service: NgCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
