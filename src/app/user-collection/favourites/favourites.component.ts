import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  response

  constructor(private route: ActivatedRoute, private userService: UserService) {
    console.log(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
    this.userService.getUserFavourites(this.route.snapshot.params['id'])
      .subscribe(data=>{
        this.response = Object.values(data)
      })
  }

}
