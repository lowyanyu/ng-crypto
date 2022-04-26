import { TestBed } from '@angular/core/testing';

import { PkiService } from './pki.service';

describe('PkiService', () => {
  let service: PkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
