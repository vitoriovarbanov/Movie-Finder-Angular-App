import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent,
    MovieCardComponent,
    InTheatersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
