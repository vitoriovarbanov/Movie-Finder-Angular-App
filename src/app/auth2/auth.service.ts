import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin$ = new BehaviorSubject(null)
  id = new BehaviorSubject(null)
  newUserData: AngularFireList<Object>
  userData

  constructor(public firebaseAuth: AngularFireAuth, private db: AngularFireDatabase,
    private router: Router, private http: HttpClient) {
    this.firebaseAuth.authState.subscribe((user)=>{
      if(user){
        this.userData = user;
        this.signedin$.next(true)
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.getUserFirebase()
        .subscribe((data) => {
        const arr = Object.entries(data)
        const userLocalStorage = JSON.parse(localStorage.getItem('user'))
         if (userLocalStorage) {
        const userEmail = userLocalStorage.email;
        const userDatabaseMail = arr.find(x => x[1].email === userEmail)
        let id = userDatabaseMail[0]
        localStorage.setItem('firebaseId', id)
        this.id.next(localStorage.getItem('firebaseId'))
        }
    })
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
        this.newUserData = this.db.list(`/users`) as AngularFireList<any>;
        this.newUserData.push({ email: email, favourites: ['no'] });
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
      localStorage.removeItem('firebaseId');
      this.router.navigate(['auth/login']);
    })
  }

  getUserFirebase(){
    return this.http.get(`https://movie-finder-angular-default-rtdb.firebaseio.com/users.json`)
  }



}
