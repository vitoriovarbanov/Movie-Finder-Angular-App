import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-right-side',
  templateUrl: './menu-right-side.component.html',
  styleUrls: ['./menu-right-side.component.css']
})
export class MenuRightSideComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe(params=>params['id'])
   }

  ngOnInit(): void {
  }

}
