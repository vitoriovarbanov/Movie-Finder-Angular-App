import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

interface User{
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseUsers: string = `https://movie-finder-angular-default-rtdb.firebaseio.com/users.json`
  user: Observable<any>

  constructor(private http: HttpClient, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
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
