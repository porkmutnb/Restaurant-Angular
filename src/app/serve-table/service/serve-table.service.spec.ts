import { TestBed } from '@angular/core/testing';

import { ServeTableService } from './serve-table.service';

describe('ServeTableService', () => {
  let service: ServeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
