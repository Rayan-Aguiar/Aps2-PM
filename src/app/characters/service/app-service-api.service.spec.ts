import { TestBed } from '@angular/core/testing';

import { AppServiceApiService } from './app-service-api.service';

describe('AppServiceApiService', () => {
  let service: AppServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
