import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  HomeComponent
} from './home.component';
import {
  UserService
} from 'src/app/shared/services/User/user.service';
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
  HomeRoutingModule
} from '../home.routes';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture < HomeComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserModule,
          HttpClientModule,
          HomeRoutingModule,
          SharedModule,
        ],
        declarations: [HomeComponent],
        providers: [UserService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
