import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/movie-details';
import { MovieService } from '../movies/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: MovieDetails
  id: string
  movieGenres: string;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute) {
      this.route.params.subscribe((params)=>{
        this.id = params['id']
      })
    }

  ngOnInit() {
    this.movieService.getMovieDetails(this.id)
        .subscribe((data)=>{
          this.movie$ = data
          this.movieGenres = this.movie$.genres.map(el=>el['name']).join(', ')
        })
  }



}
