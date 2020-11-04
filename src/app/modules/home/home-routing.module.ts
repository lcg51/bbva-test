import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/services/Auth/auth.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
