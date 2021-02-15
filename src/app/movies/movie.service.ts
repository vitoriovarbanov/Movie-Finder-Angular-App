import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { map, tap, pluck, toArray } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '&api_key=a32172eb02aa5a52453e624b530a9505';
  popularMovies: string = 'discover/movie?sort_by=popularity.desc';
  theatersDiscover: string = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2019-02-01'

  tests;

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<Movie[]>(`${this.baseUrl}${this.popularMovies}${this.apiKey}`)
        .pipe(pluck('results'))
  }
}
