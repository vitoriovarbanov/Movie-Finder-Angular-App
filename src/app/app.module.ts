import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';

import { MoviesCollectionModule } from './movies-collection/movies-collection.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesCollectionModule,
    SharedModule
  ],
  providers: [SingleMovieResolver,HomepageMoviesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
