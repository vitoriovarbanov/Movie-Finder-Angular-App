import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface User{
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>
  signedin$ = new BehaviorSubject(false)

  constructor(private http: HttpClient, private firebaseAuth: AngularFireAuth, private router: Router,) {
    this.user$ = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        //this.router.navigate(['auth/login'])
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.signedin$.next(true)
        console.log(this.signedin$)
        ///console.log('Nice, it worked!'); IMPLEMENT LOGIC TO SAVE WTOKEN ??? COOKIE ?? AND AUTH GUARD
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
  }

}
