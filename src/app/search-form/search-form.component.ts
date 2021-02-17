import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  //@Output() searchMovieEmitter = new EventEmitter()
  searchedMovies;
  moviesFound: boolean = false;

  searchForm = new FormGroup({
    movieName: new FormControl('',[Validators.required])
  })

  constructor(private movieService: MovieService) {
    console.log(this.searchForm.controls.movieName)
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.movieService.searchMovie(value.movieName)
        .subscribe((data)=>{
          this.searchedMovies = data;
          this.moviesFound = true;
        })
  }
}
