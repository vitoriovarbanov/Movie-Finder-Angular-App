import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // add cuustom async validator to check if the user exists
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginClick(){

  }

}
