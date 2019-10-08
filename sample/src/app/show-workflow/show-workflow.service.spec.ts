import { TestBed } from '@angular/core/testing';

import { ShowWorkflowService } from './show-workflow.service';

describe('ShowProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowWorkflowService = TestBed.get(ShowWorkflowService);
    expect(service).toBeTruthy();
  });
});
