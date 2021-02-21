import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Auth2RoutingModule } from './auth2-routing.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    Auth2RoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class Auth2Module { }
