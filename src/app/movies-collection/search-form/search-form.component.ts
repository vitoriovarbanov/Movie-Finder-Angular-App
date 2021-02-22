import { Component, OnInit,} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  //@Output() searchMovieEmitter = new EventEmitter()

  searchForm = new FormGroup({
    movieName: new FormControl('',[Validators.required])
  })

  constructor(private router: Router) {
    //console.log(this.searchForm.controls.movieName)
  }

  ngOnInit(): void {
  }

  onSubmit(value){
    this.router.navigate(['/movies/search'], { queryParams: {token:  value.movieName} })
  }

}
