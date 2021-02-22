import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth2/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() signedIn;
  constructor(public authService: AuthService) { }


  ngOnInit(): void { }


  logout() {
    this.authService.logout()
  }
}
