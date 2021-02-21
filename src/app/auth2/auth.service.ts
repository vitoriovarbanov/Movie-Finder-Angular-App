import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

interface User{
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseUsers: string = `https://movie-finder-angular-default-rtdb.firebaseio.com/users.json`

  constructor(private http: HttpClient) { }

  getListOfRegisteredUsers(){
    return this.http.get<User[]>(`${this.firebaseUsers}`)
        .pipe(map((data)=>{
          return data = Object.values(data)
        }))
  }
}
