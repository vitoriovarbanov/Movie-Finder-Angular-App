import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-found-movies',
  templateUrl: './found-movies.component.html',
  styleUrls: ['./found-movies.component.css']
})
export class FoundMoviesComponent implements OnInit {
  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
