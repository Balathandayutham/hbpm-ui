import { TestBed } from '@angular/core/testing';

import { ShowProcessService } from './show-process.service';

describe('ShowProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowProcessService = TestBed.get(ShowProcessService);
    expect(service).toBeTruthy();
  });
});
