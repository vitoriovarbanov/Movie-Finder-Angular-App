import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  responses;
  private destroy$ = new Subject()

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies()
      .pipe(takeUntil(this.destroy$))             // NE E ZADULJITELNO ZA HTTP REQ DA IZPOLZVAME takeUntil
      .subscribe((movieData) => {
        this.responses = movieData
      })
  }
 // IT IS NOT NECCESARY TO UNSUBSCRIBE FROM HTTP REQUEST!!!!!!!!!!! YOU CAN SKIP THE NEXT LINES OF CODE
  ngOnDestroy(): void {
    this.destroy$.next();  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }


}
