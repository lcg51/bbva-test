import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  User
} from 'src/app/models/User/user';
import {
  StorageService
} from '../Storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';
  public user: User;
  public token: string;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) {
    const userS = this.storage.getStorage('user');
    this.user = (this.storage.getStorage('user')) ? new User().deserialize(userS) : null;
  }

  public logIn(user: any): Observable < any > {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    const headersObj = { headers: httpHeaders };
    return this.http.post(`${this.baseUrl}/login`, user, headersObj);
  }

  public logOut(userL: User): Observable < any > {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'access-token': this.token
    });
    const headersObj = { headers: httpHeaders };
    return this.http.post(`${this.baseUrl}/logout`, { user: userL }, headersObj);
  }

  public saveUser(userData) {
    this.user = new User().deserialize(userData);
    this.storage.setStorage('user', this.user);
  }

  public saveToken(token: string) {
    this.token = token;
    this.storage.setStorage('token', this.token);
  }

  public removeUser() {
    this.user = null;
    this.storage.removeStorage('user');
  }

  public removeToken() {
    this.storage.removeStorage('token');
  }

  public isLogged() {
    return (this.user instanceof User) ? true : false;
  }
}
