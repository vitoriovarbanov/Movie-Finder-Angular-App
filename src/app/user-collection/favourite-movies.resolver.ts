import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { UserService } from './user.service';
import { FavouriteMovie } from '../models/favourite-movie'

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesResolver implements Resolve<any> {
  constructor(private userService: UserService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.getUserFavourites()
  }
}
