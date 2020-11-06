import {
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  UserService
} from './user.service';
import {
  User
} from '../../models/User/user';
import { UserLoginI } from '../../interfaces/user.interface';

export const mockUserData: UserLoginI = {
  mail: 'luis@accenture.com',
  password: '123456'
};

export const userData = {
  id: 1,
  name: 'Luis',
  surname: 'Cobo',
  mail: 'luis@accenture.com',
  lastAccess: new Date().getTime(),
};

export const mockUser: User = new User().deserialize(userData);

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const serviceI: UserService = TestBed.get(UserService);
    expect(serviceI).toBeTruthy();
  });

  it('random should provide data', () => {
    service.logIn(mockUserData).subscribe((user: User) => {
      expect(user).not.toBe(null);
      expect(JSON.stringify(user)).toEqual(JSON.stringify(mockUser));
    });
  });
});
