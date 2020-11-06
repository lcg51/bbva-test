import {
  TestBed
} from '@angular/core/testing';

import {
  AuthService
} from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let service: AuthService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(AuthService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const serviceI: AuthService = TestBed.get(AuthService);
    expect(serviceI).toBeTruthy();
  });
});
