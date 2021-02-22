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
  signedin$ = new BehaviorSubject(false)
  userData

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    /* this.firebaseAuth.authState.subscribe((user)=>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    }) */
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
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.signedin$.next(true)
        console.log('Nice, it worked!', result);
        return result
      })
      .then(data=>{
        this.userData = data.user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    return this.firebaseAuth.signOut().then(() => {
      this.signedin$.next(false)
      localStorage.removeItem('user');
      //this.router.navigate(['movies']);
    })
  }

}
