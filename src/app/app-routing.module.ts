import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
