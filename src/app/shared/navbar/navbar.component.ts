import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth2/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() signedIn;
  id: string
  constructor(public authService: AuthService) {
    let id = localStorage.getItem('firebaseId')
    this.id = id
  }


  ngOnInit(): void {}

  logout() {
    this.authService.logout()
  }
}
