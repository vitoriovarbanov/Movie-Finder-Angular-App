import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { MovieDetails } from '../movie-details'
import { MovieService } from 'src/app/movies-collection/movies/movie.service'



@Injectable()
export class SingleMovieResolver implements Resolve<MovieDetails>{

    constructor(private movieService: MovieService ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      console.log(route.params)
      const id = route.params['id']

      return this.movieService.getMovieDetails(id)
    }
}
