import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-found-movies',
  templateUrl: './found-movies.component.html',
  styleUrls: ['./found-movies.component.css']
})
export class FoundMoviesComponent implements OnInit {
  @Input() movie;
  imagePath;

  constructor() {
  }

  ngOnInit(): void {
    this.imagePath = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
  }

}
