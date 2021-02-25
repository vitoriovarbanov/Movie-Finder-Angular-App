import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCollectionRoutingModule } from './user-collection-routing.module';
import { FavouritesComponent } from './favourites/favourites.component';


@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    UserCollectionRoutingModule
  ]
})
export class UserCollectionModule { }
