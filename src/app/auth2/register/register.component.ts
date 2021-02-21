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
  test;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-z\\s]+')]),
    email: new FormControl('', [Validators.required, Validators.email], [this.emailValidator.validate]),
    phoneNumber: new FormControl('' , [Validators.required, Validators.minLength(10)]),
    certificate: new FormControl('', [Validators.required, this.correctUrl.validate]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required])
  }, {validators: [this.matchPasswords.validate]})

  constructor(private matchPasswords: PasswordMatch,
    private correctUrl: CorrectUrl,
    private router: Router,
    private authService: AuthService,
    private emailValidator: EmailAsyncValidator) { }

  ngOnInit(): void {
   /*  this.authService.getListOfRegisteredUsers()
        .subscribe((data)=>{
          console.log(data)
        })
    this.test = this.test.find(x=>x.email === "br_br@gmail.com") */
  }


  onSubmit(){
    this.router.navigate(['/movies'])
  }
}
