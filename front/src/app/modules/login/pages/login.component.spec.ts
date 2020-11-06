import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  LoginComponent
} from './login.component';
import {
  FormsModule
} from '@angular/forms';
import {
  SharedModule
} from 'src/app/shared/shared.module';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  UserService
} from 'src/app/shared/services/User/user.service';
import { LoginRoutingModule } from '../login.routes';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture < LoginComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserModule,
          HttpClientModule,
          LoginRoutingModule,
          SharedModule,
          FormsModule
        ],
        declarations: [LoginComponent],
        providers: [UserService],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
