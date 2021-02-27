import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baserUrl: string = `https://movie-finder-angular-default-rtdb.firebaseio.com/users/`

  constructor(private http: HttpClient) { }

  getUserFavourites(id){
    return this.http.get(`${this.baserUrl}${id}/favourites.json`)
  }

  removeMovie(movieId,userId){
    return this.http.delete(`${this.baserUrl}${userId}/favourites/${movieId}.json`)
  }
}
