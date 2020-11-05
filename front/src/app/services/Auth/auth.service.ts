import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  CanActivate
} from '@angular/router';
import {
  UserService
} from '../User/user.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  /**
   * Returns if the user is logged.
   *
   */

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (!this.userService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
