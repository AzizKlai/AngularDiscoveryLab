import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { exitAddCvGuard } from './exit-add-cv.guard';

describe('exitAddCvGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitAddCvGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
