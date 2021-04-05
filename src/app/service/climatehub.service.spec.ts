import { TestBed } from '@angular/core/testing';

import { ClimatehubService } from './climatehub.service';

describe('ClimatehubService', () => {
  let service: ClimatehubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimatehubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
