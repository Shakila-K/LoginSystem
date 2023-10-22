import { TestBed } from '@angular/core/testing';

import { HttpRecieverInterceptorService } from './http-reciever-interceptor.service';

describe('HttpRecieverInterceptorService', () => {
  let service: HttpRecieverInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRecieverInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
