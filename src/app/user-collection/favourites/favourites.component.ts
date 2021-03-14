import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  response
  ChangeDetectorRef: any;
  notification: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService,
    private zone: NgZone) {}

  ngOnInit(): void {
    this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .subscribe(data=>{
        const filtered = Object.values(data)
        this.response = filtered.filter(x=>x!=='no')
      })
  }

  removeMovie(movieId){
    return this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .pipe(map((data)=>{
        const removedMovie = Object.entries(data).find(x=>x[1].id===movieId)
        return removedMovie[0]
      }),flatMap((removedMovie)=>{
        console.log(removedMovie)
        return this.userService.removeMovie(removedMovie,this.route.snapshot.params['id'])
      })).subscribe(()=>this.zone.run(()=>{
        console.log(this.zone)
        this.reRenderMovies()
      }))
  }

  reRenderMovies(){
    this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .subscribe(data=>{
        this.response = Object.values(data)
        this.notification = true;
      })
  }

  closeNotification(){
    this.notification = !this.notification
  }

}
