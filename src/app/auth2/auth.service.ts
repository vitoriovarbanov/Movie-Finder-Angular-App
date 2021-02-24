import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin$ = new BehaviorSubject(null)
  userData

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.authState.subscribe((user)=>{
      if(user){
        this.userData = user;
        this.signedin$.next(true)
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user', null);
        this.signedin$.next(false)
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['auth/login'])
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.signedin$.next(true)
        this.router.navigate(['movies'])
        console.log('Nice, it worked!', result);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    return this.firebaseAuth.signOut().then(() => {
      this.signedin$.next(false)
      localStorage.removeItem('user');
      this.router.navigate(['auth/login']);
    })
  }


}
