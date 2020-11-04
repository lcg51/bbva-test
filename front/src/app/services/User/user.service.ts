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

  private baseUrl = 'http://localhost:3000/login';
  public user: User;

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
    return this.http.post(this.baseUrl, user, {
      headers: httpHeaders
    });
  }

  public saveUser(userData) {
    this.user = new User().deserialize(userData);
    this.storage.setStorage('user', this.user);
  }

  public isLogged() {
    return (this.user instanceof User) ? true : false;
  }
}
