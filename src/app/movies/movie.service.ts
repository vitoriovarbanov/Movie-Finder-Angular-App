import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3/movie/'
  apiKey: string = 'a32172eb02aa5a52453e624b530a9505'

  constructor(private http: HttpClient) { }
}
