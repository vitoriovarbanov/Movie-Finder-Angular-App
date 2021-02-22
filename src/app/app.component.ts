import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth2/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signedin$
      .subscribe((data) => {
        this.signedin = data
      })
  }

  logOut() {
    this.authService.logout()
    this.authService.signedin$
      .subscribe((signedInData) => {
        this.signedin = signedInData
      })
  }

}
