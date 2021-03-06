import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../../models/movie-details';
import { MovieService } from '../movies/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$: MovieDetails
  movieGenres: string;
  similarMovies;
  notification: boolean = false;

  constructor(private movieService: MovieService, // S RESOLVERA MOJEM DA MAHNEM DEPENDECY INJ NA SERVICE, ZASHTOTO GO VIKAME DIREKTNO V SINGLE_MOVIE_RESOLVER!!
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.movie$ = this.route.snapshot.data['singleMovie'];          // RESOLVER!!!!
    this.movieGenres = this.movie$.genres.map(el => el['name']).join(', ');

  }
  /* this.route.params.subscribe((params)=>{
    this.id = params['id']
  })
                                                                  // MOJE DA BUDE ZAMENENO ZASHTOTO POLZVAME RESOLVER I VZEMAME DANNITE SPRQMO AKTIVNIQ ROUTE/PATH
  this.movieService.getMovieDetails(this.id)
      .subscribe((data)=>{
        this.movie$ = data
        this.movieGenres = this.movie$.genres.map(el=>el['name']).join(', ')
      }) */

  addToFavourites(){
    const posterPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this.movie$.poster_path}`
    const userId = localStorage.getItem('firebaseId')
    this.movieService.addFavouriteMovieToFirebase(userId, this.route.params['_value'].id, this.movie$.title,
    posterPath, this.movie$.homepage )
        .snapshotChanges().subscribe(data=>console.log(data))
    this.notification = true;
    setTimeout(()=>{
      this.notification = false;
    },3000)
  }

  closeNotification(){
    this.notification = false;
  }
}
