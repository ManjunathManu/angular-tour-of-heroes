import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
na
  constructor() { }

  ngOnInit() {
  }
  toSearchHero: Hero;
  searchHero(): void {
    console.log(this.toSearchHero);
    console.log(event)
  }

}
