import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/movie';
import { map, tap, pluck,} from 'rxjs/operators'
import { MovieDetails } from '../../models/movie-details';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '&api_key=a32172eb02aa5a52453e624b530a9505';
  popularMovies: string = 'discover/movie?sort_by=popularity.desc';
  theatersDiscover: string = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2020-02-01'
  getMovieOverview: string = '?api_key=a32172eb02aa5a52453e624b530a9505'

  favouritesRef: AngularFireList<any>;


  constructor(private http: HttpClient, private db: AngularFireDatabase) {
  }

  getPopularMovies(){
    return this.http.get<Movie[]>(`${this.baseUrl}${this.popularMovies}${this.apiKey}`)
        //.pipe(pluck('results'))
  }

  getMoviesInTheaters(){
    return this.http.get<Movie[]>(`${this.baseUrl}${this.theatersDiscover}${this.apiKey}`)
        .pipe(pluck('results'))
  }

  getUpcomingMovies(){
    return this.http.get<any>(`${this.baseUrl}movie/upcoming${this.getMovieOverview}&language=en-US&page=1`)
        .pipe(map((data)=>{
            return data['results'].slice(0,6)
        }))
  }

  getMovieDetails(id){
    return this.http.get<MovieDetails>(`${this.baseUrl}movie/${id}${this.getMovieOverview}`)
  }

  searchMovie(query: string){
    return this.http.get<Movie[]>(`${this.baseUrl}search/movie${this.getMovieOverview}&query=${query}`)
      .pipe(pluck('results'))
  }

  getSimilarMovies(id){
    return this.http.get<{title: string}[]>(`https://api.themoviedb.org/3/movie/${id}/alternative_titles${this.getMovieOverview}`)
      .pipe(map((data)=>{
        return data['titles']
      }))
  }

  addFavouriteMovieToFirebase(userID,movieID,title,posterPath,homepage){
    this.favouritesRef = this.db.list(`/users/${userID}/favourites`) as AngularFireList<any>;
    this.favouritesRef.push({ id: movieID, title , image: posterPath, url: homepage });
    return this.favouritesRef;
  }
}
