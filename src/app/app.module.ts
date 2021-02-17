import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FoundMoviesComponent } from './found-movies/found-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent,
    MovieCardComponent,
    InTheatersComponent,
    MovieDetailsComponent,
    SearchFormComponent,
    FoundMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
