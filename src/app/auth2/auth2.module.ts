import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth2RoutingModule } from './auth2-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    Auth2RoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class Auth2Module { }
