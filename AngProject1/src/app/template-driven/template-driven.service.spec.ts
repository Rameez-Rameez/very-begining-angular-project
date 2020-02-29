import { TestBed } from '@angular/core/testing';

import { TemplateDrivenService } from './template-driven.service';

describe('TemplateDrivenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateDrivenService = TestBed.get(TemplateDrivenService);
    expect(service).toBeTruthy();
  });
});
