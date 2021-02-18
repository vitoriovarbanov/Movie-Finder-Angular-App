import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-z\\s]+')]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('+359' , [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

}
