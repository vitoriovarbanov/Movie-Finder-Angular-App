import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies/movie.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  description: string;
  constructor(private movieService: MovieService, private route: Router) {
  }

  ngOnInit(): void {
    const [url,url2,id,url3] = this.route.url.split('/')
    console.log(id)
    this.movieService.getMovieDetails(id)
      .subscribe(data=>{
        this.description = data['overview']
      })
  }

}
