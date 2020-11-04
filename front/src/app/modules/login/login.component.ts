import {
  Component,
  OnInit
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Router
} from '@angular/router';

import { SortPetsI } from 'src/app/interfaces/sort-pets-i';
import { StorageService } from 'src/app/services/Storage/storage.service';
import * as moment from 'moment';


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
        validation: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        msg: 'El mail introducido no es correcto',
        error: false,
        valid: false
      },
      password: {
        type: 'password',
        validation: /^.{6,}$/,
        msg: 'La contraseña debe de tener al menos 6 carácteres',
        error: false,
        valid: false,
      }
  };

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  ngOnInit() {
  }

  public validateFormInput(ev: any, key: string) {
      console.log(ev);
      this.form[key].valid = ev;
      this.checkForm();
  }

  public checkForm() {
    let keys: any = Object.entries(this.form);
    keys = keys.map(key => key[1]);
    const someKeyIsFalse = keys.some(input => input.valid === false);
    this.disableButton = (someKeyIsFalse) ? true : false;
  }

  public goToHome() {
    this.router.navigate(['/']);
  }

}
