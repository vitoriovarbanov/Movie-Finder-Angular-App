import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() res;
  imagePath: string
  constructor() { }

  ngOnInit(): void {
    this.imagePath = `https://image.tmdb.org/t/p/w500/${this.res.poster_path}`
  }

}
