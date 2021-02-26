import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth2/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin;
  id

  constructor(private authService: AuthService) {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      this.authService.signedin$.next(true)
      //this.authService.id.next(localStorage.getItem('firebaseId'))
    }
    this.authService.signedin$
      .subscribe((data) => {
        this.signedin = data
      })
    this.authService.id
      .subscribe((data)=>{
        this.id = data
      })
  }

  ngOnInit() { }

}
