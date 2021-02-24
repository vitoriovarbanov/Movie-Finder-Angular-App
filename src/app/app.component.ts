import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth2/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin;

  constructor(private authService: AuthService) {
    this.authService.signedin$
      .subscribe((data) => {
        this.signedin = data
      })
  }

  ngOnInit() {

  }

  logOut() {
    this.authService.logout()
  }

}
