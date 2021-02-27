import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { tap, flatMap, switchMap, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  response

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .subscribe(data=>{
        const filtered = Object.values(data)
        this.response = filtered.filter(x=>x!=='no')
        //this.response = Object.values(data)
      })
  }

  removeMovie(movieId){
    this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .pipe(map((data)=>{
        const removedMovie = Object.entries(data).find(x=>x[1].id===movieId)
        return removedMovie[0]
      }),flatMap((removedMovie)=>{
        console.log(removedMovie)
        return this.userService.removeMovie(removedMovie,this.route.snapshot.params['id'])
      })).subscribe(data=>console.log(data))
  }



}
