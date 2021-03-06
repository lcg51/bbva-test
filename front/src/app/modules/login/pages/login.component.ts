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
import {
  UserLoginI
} from 'src/app/shared/interfaces/user.interface';



@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public disableButton = true;
  public form = {
    mail: {
      type: 'text',
      value: '',
      validation: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      msg: 'El mail introducido no es correcto',
      error: false,
      valid: false
    },
    password: {
      type: 'password',
      value: '',
      validation: /^.{6,}$/,
      msg: 'La contraseña debe de tener al menos 6 carácteres',
      error: false,
      valid: false,
    }
  };
  public error: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  public validateFormInput(ev, key: string) {
    this.form[key].valid = ev.valid;
    this.form[key].value = ev.value;
    this.checkForm();
  }

  public checkForm() {
    let keys: Array < any > = Object.entries(this.form);
    keys = keys.map(key => key[1]);
    const someKeyIsFalse = keys.some(input => input.valid === false);
    this.disableButton = (someKeyIsFalse) ? true : false;
  }

  public login() {
    const user: UserLoginI = {
      mail: this.form.mail.value,
      password: this.form.password.value
    };
    this.userService.logIn(user).subscribe(
      response => {
        this.userService.saveUser(response.body);
        this.userService.saveToken(response.token);
        this.router.navigate(['/']);
        this.error = null;
      },
      error => {
        this.error = error.error.message;
      });
  }

}
