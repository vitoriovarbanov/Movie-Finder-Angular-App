import { Injectable } from '@angular/core'
import { Movie } from '../movie';
import { MovieService } from 'src/app/movies-collection/movies/movie.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';


@Injectable()
export class HomepageMoviesResolver implements Resolve<Movie[]>{

  constructor(private movieService: MovieService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //console.log(route.params)
    return this.movieService.getPopularMovies()
  }

}
