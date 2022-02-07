import { TestBed } from '@angular/core/testing';

import { GetpostsService } from './getposts.service';

describe('GetpostsService', () => {
  let service: GetpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
