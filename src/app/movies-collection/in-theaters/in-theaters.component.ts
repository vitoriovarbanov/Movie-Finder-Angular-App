import { Component, OnInit, Input } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {
  @Input() movie
  imagePath: string;

  constructor() { }

  ngOnInit(): void {
    this.imagePath = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
  }

}

