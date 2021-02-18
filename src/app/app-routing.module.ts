import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';
import { SearchedMoviesComponent } from './searched-movies/searched-movies.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
  { path: 'movies', component: MoviesComponent, resolve: { homepageMovies: HomepageMoviesResolver } },
  { path: 'movies/search', component: SearchedMoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
