import { TestBed, inject } from '@angular/core/testing';

import { IdeaService } from './idea.service';

describe('IdeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaService]
    });
  });

  it('should ...', inject([IdeaService], (service: IdeaService) => {
    expect(service).toBeTruthy();
  }));
});