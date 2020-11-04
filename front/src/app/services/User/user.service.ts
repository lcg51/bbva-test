import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://my-json-server.typicode.com/Feverup/';
  public user: User;

  constructor(
    private http: HttpClient
  ) { }

  public logIn(user: User): any {
    sessionStorage.saveItem('user', JSON.stringify(user));
    return user;
  }

  public isLogged() {
    return false;
  }
}
