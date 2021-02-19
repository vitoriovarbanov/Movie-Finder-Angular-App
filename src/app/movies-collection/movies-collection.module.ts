import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MoviesComponent } from './movies/movies.component';
import { FoundMoviesComponent } from './found-movies/found-movies.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component'
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchedMoviesComponent } from './searched-movies/searched-movies.component';
import { SearchFormComponent } from './search-form/search-form.component';


@NgModule({
  declarations: [
    MoviesComponent,
    FoundMoviesComponent,
    InTheatersComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    SearchedMoviesComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],exports: [
    MoviesComponent,
    FoundMoviesComponent,
    InTheatersComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    SearchFormComponent,
    SearchedMoviesComponent
  ]
})
export class MoviesCollectionModule { }
