import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './../navbar/navbar.component';
import { HeroService} from './../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor(public heroService:HeroService) { }
  ngOnInit() {
  }
}
