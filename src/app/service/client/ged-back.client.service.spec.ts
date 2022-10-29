import { TestBed } from '@angular/core/testing';

import { GedBackClientService } from './ged-back.client.service';

describe('GedBackClientService', () => {
  let service: GedBackClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GedBackClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
