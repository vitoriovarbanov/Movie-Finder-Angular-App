import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorsValidatorComponent } from './input-errors-validator/input-errors-validator.component';


@NgModule({
  declarations: [RegisterComponent, InputErrorsValidatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class AuthModule { }
