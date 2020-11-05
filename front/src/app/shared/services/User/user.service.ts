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
} from 'src/app/shared/models/User/user';
import {
  StorageService
} from '../Storage/storage.service';
import {
  UserLoginI
} from 'src/app/shared/interfaces/user.interface';
import {
  APIURL
} from 'src/app/config/vars';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = APIURL;
  public user: User;
  public token: string;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) {
    const userS = this.storage.getStorage('user');
    this.user = (this.storage.getStorage('user')) ? new User().deserialize(userS) : null;
  }

  /**
   * Makes to login with server.
   *
   *
   * @param user - The data of the user(UserLoginI) logged
   * @returns The an observable with the data`
   */
  public logIn(user: UserLoginI): Observable < any > {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    const headersObj = {
      headers: httpHeaders
    };
    return this.http.post(`${this.baseUrl}/login`, user, headersObj);
  }

  /**
   * Method to logout with server.
   *
   *
   * @param user - The data of the user(User) logged
   * @returns An observable with the data`
   */
  public logOut(userL: User): Observable < any > {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'access-token': this.token
    });
    const headersObj = {
      headers: httpHeaders
    };
    return this.http.post(`${this.baseUrl}/logout`, {
      user: userL
    }, headersObj);
  }

  /**
   * Method that maps the user
   *
   *
   * @param user - The data of the user(User) logged
   */
  public saveUser(userData: User) {
    this.user = new User().deserialize(userData);
    this.storage.setStorage('user', this.user);
  }

  /**
   * Method that stores the token
   *
   *
   * @param token - The token from autentication
   */
  public saveToken(token: string) {
    this.token = token;
    this.storage.setStorageString('token', this.token);
  }

  /**
   * Method that removes the user from the app
   *
   *
   */
  public removeUser() {
    this.user = null;
    this.storage.removeStorage('user');
  }

  /**
   * Method that removes the token from the app
   *
   *
   */
  public removeToken() {
    this.storage.removeStorage('token');
  }

  /**
   * Method that check if the user is logged
   *
   *
   */
  public isLogged() {
    return (this.user instanceof User) ? true : false;
  }
}
