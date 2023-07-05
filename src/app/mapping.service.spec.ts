import { TestBed } from '@angular/core/testing';

import { MappingService } from '../repositories/mapping.service';

describe('MappingService', () => {
  let service: MappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
