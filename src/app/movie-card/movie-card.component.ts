import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() res;
  imagePath: string
  //@Output() showDetailsEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.imagePath = `https://image.tmdb.org/t/p/w500/${this.res.poster_path}`
  }

  /* showMovieDetails(){
    this.showDetailsEmitter.emit(this.res.id)
  } */

}
