import { Injectable } from '@angular/core'
import { AsyncValidator, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

interface User{
  name: string;
  email: string;
}

@Injectable({providedIn: 'root'})
export class EmailAsyncValidator implements AsyncValidator {
  firebaseUsers: string = `https://movie-finder-angular-default-rtdb.firebaseio.com/users.json`
  constructor(private http: HttpClient){}

  validate = (formControl: FormControl) => {
    let email  = formControl.value;

    return this.http.get<User[]>(`${this.firebaseUsers}`)
        .pipe(map((data)=>{
          let findEmail = Object.values(data).find(x=>x.email===email)
          if(!findEmail){
            return null
          }else{
            return { invalidEmail: true }
          }
        }))

  }
}
