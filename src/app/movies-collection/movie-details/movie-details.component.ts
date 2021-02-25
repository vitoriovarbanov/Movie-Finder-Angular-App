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
  userId: string

  constructor(private movieService: MovieService, // S RESOLVERA MOJEM DA MAHNEM DEPENDECY INJ NA SERVICE, ZASHTOTO GO VIKAME DIREKTNO V SINGLE_MOVIE_RESOLVER!!
    private route: ActivatedRoute) {
      this.movieService.getUserFirebase()
        .subscribe((data)=>{
          const arr = Object.entries(data)
          const userLocalStorage = JSON.parse(localStorage.getItem('user'))
          const userEmail = userLocalStorage.email;
          const userDatabaseMail = arr.find(x=>x[1].email === userEmail)
          this.userId = userDatabaseMail[0]
        })
  }

  ngOnInit() {
    console.log(this.route.snapshot.data['singleMovie'])
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
    this.movieService.addFavouriteMovieToFirebase(this.userId, this.route.params['_value'].id, this.movie$.title,
    posterPath, this.movie$.homepage )
        .snapshotChanges().subscribe(data=>console.log(data))
  }
}
