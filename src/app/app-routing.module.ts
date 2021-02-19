import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MoviesComponent } from './movies-collection/movies/movies.component';
import { MovieDetailsComponent } from './movies-collection/movie-details/movie-details.component';
import { SearchedMoviesComponent } from './movies-collection/searched-movies/searched-movies.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';

import { RegisterComponent } from './auth/register/register.component';

const routes: Route[] = [
  { path: 'movies', component: MoviesComponent, resolve: { homepageMovies: HomepageMoviesResolver } },
  { path: 'movies/search', component: SearchedMoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver } },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
