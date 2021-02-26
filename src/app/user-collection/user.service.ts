import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baserUrl: string = `https://movie-finder-angular-default-rtdb.firebaseio.com/users/`

  constructor(private http: HttpClient) { }

  getUserFavourites(id){
    //const id = localStorage.getItem('firebaseId')
    return this.http.get(`${this.baserUrl}${id}/favourites.json`)
  }
}
