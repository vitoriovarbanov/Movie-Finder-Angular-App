import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PasswordMatch } from '../validators/password-match';
import { CorrectUrl } from '../validators/correct-url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-z\\s]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('' , [Validators.required, Validators.minLength(10)]),
    certificate: new FormControl('', [Validators.required, this.correctUrl.validate]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  }, {validators: [this.matchPasswords.validate]})

  constructor(private matchPasswords: PasswordMatch, private correctUrl: CorrectUrl, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.router.navigate(['/movies'])
  }
}
