import { TestBed, inject } from '@angular/core/testing';

import { CommonSampleAppService } from './common-sample-app.service';

describe('CommonSampleAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonSampleAppService]
    });
  });

  it('should be created', inject([CommonSampleAppService], (service: CommonSampleAppService) => {
    expect(service).toBeTruthy();
  }));
});
