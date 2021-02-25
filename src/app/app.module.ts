import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCGVg2Fbxqw3P1J059PT3Ja7kpofaxZME0",
  authDomain: "movie-finder-angular.firebaseapp.com",
  databaseURL: "https://movie-finder-angular-default-rtdb.firebaseio.com",
  projectId: "movie-finder-angular",
  storageBucket: "movie-finder-angular.appspot.com",
  messagingSenderId: "155297940102",
  appId: "1:155297940102:web:af308774acae8aebdc8707"
};

import { AppComponent } from './app.component';

import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';

import { MoviesCollectionModule } from './movies-collection/movies-collection.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth2/auth.service';
import { FavouritesComponent } from './UserCollection/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesCollectionModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [SingleMovieResolver,HomepageMoviesResolver, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
