import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-searched-movies',
  templateUrl: './searched-movies.component.html',
  styleUrls: ['./searched-movies.component.css']
})
export class SearchedMoviesComponent implements OnInit {
  searchedMovies;
  query: string;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params)=>{
      this.query = params['token']
      this.movieService.searchMovie(this.query)
        .subscribe((data)=>{
          this.searchedMovies = data;
    })
    })

  }



}

