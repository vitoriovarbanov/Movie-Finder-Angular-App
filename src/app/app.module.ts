import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FoundMoviesComponent } from './found-movies/found-movies.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchedMoviesComponent } from './searched-movies/searched-movies.component';
import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FoundMoviesComponent,
    InTheatersComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesComponent,
    SearchFormComponent,
    SearchedMoviesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [SingleMovieResolver,HomepageMoviesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
