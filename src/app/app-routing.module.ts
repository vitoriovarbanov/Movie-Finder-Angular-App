import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

import { MoviesComponent } from './movies-collection/movies/movies.component';
import { MovieDetailsComponent } from './movies-collection/movie-details/movie-details.component';
import { SearchedMoviesComponent } from './movies-collection/searched-movies/searched-movies.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { SingleMovieResolver } from './models/resolvers/single-movie.resolver';
import { HomepageMoviesResolver } from './models/resolvers/homepage-movies.resolver';

import { MovieReviewComponent } from './movies-collection/movie-review/movie-review.component';
import { SideBarComponent } from './movies-collection/movie-details/side-bar/side-bar.component';
import { MenuRightSideComponent } from './movies-collection/movie-details/menu-right-side/menu-right-side.component';
import { DescriptionComponent } from './movies-collection/movie-details/description/description.component';
import { PopularityComponent } from './movies-collection/movie-details/popularity/popularity.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/register']);

const routes: Route[] = [
  { path: 'movies', component: MoviesComponent, resolve: { homepageMovies: HomepageMoviesResolver } },
  { path: 'movies/search', component: SearchedMoviesComponent },
  {
    path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      { path: '', component: SideBarComponent },
      { path: 'description', component: DescriptionComponent },
      { path: 'popularity', component: PopularityComponent },
      { path: '', outlet: 'menuright', component: MenuRightSideComponent},
    ]
  },
  {
    path: 'movies/:id/review', component: MovieReviewComponent, resolve: { singleMovie: SingleMovieResolver },
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: 'auth', loadChildren: () => import('./auth2/auth2.module').then(m => m.Auth2Module) },
  { path: 'user', loadChildren: () => import('./user-collection/user-collection.module').then(m => m.UserCollectionModule),
  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
