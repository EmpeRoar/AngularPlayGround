import { TestBed } from '@angular/core/testing';

import { PgHttpService } from './pg-http.service';

describe('PgHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgHttpService = TestBed.get(PgHttpService);
    expect(service).toBeTruthy();
  });
});
