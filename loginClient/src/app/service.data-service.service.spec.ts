import { TestBed } from '@angular/core/testing';

import { ServiceDataServiceService } from './service.data-service.service';

describe('ServiceDataServiceService', () => {
  let service: ServiceDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
