import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from './movie.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth2/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  responses;
  movieInfo: string;
  upcomingMovies;
  showInfo: boolean = false;
  private destroy$ = new Subject()

  constructor(private movieService: MovieService, private route: ActivatedRoute, private authService: AuthService) {
   }

  ngOnInit(): void {
    //console.log(this.route.snapshot.data)
    this.responses = this.route.snapshot.data.homepageMovies['results']
    this.responses = this.responses.slice(0,5)
    /* this.movieService.getPopularMovies()
      .pipe(takeUntil(this.destroy$))             // NE E ZADULJITELNO ZA HTTP REQ DA IZPOLZVAME takeUntil
      .subscribe((movieData) => {
        this.responses = movieData
        this.responses = this.responses.slice(0,5)
      }) */
    this.movieService.getUpcomingMovies()
        .subscribe((upMovies)=>{
            this.upcomingMovies = upMovies;
        })
  }

  moviesInTheaters$ = this.movieService.getMoviesInTheaters()


  /* emitId(id){
    this.movieService.getMovieDetails(id)
      .subscribe((data: string)=>{
        this.movieInfo = data;
        this.showInfo = true;
      })
  } */


 // IT IS NOT NECCESARY TO UNSUBSCRIBE FROM HTTP REQUEST!!!!!!!!!!! YOU CAN SKIP THE NEXT LINES OF CODE
  ngOnDestroy(): void {
    this.destroy$.next();  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }


}
