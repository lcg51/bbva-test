import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserService
} from 'src/app/shared/services/User/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {}

  public logout() {
    this.userService.logOut(this.userService.user).subscribe(result => {
      this.userService.removeUser();
      this.userService.removeToken();
      this.router.navigate(['login']);
    });
  }

}
