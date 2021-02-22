import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PasswordMatch } from '../validators/password-match';
import { CorrectUrl } from '../validators/correct-url';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmailAsyncValidator } from '../validators/email-async-validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  successMsg: string = 'Success';
  showSuccess = false;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-z\\s]+')]),
    email: new FormControl('', [Validators.required, Validators.email], [this.emailValidator.validate]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    certificate: new FormControl('', [Validators.required, this.correctUrl.validate]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  }, { validators: [this.matchPasswords.validate] })

  constructor(private matchPasswords: PasswordMatch,
    private correctUrl: CorrectUrl,
    private router: Router,
    public authService: AuthService,
    private emailValidator: EmailAsyncValidator) { }

  ngOnInit(): void { }

  onSubmit() {
    setTimeout(() => {
      this.authService.signup(this.registerForm.value.email, this.registerForm.value.password)
    },1000)
    this.showSuccess = true;
  }
}
