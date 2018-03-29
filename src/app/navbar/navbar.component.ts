import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { findIndex } from 'rxjs/operator/findIndex';
import { HeroService} from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItems: Array<Object> = [{ item: "Dashboard", activeStatus: true, route: "/dashboard" },
  { item: "Heroes", activeStatus: false, route: "/heroes" }];

  public activeItem: Object = this.menuItems[0]
  // public searchResult : Hero[];
  private index: number;
  constructor(private heroService:HeroService) { }

  // @Input() searchResult:Hero[];

  ngOnInit() {
  }

  searchHero(toSearchHero): void {
    console.log(toSearchHero.value);
    let term = toSearchHero.value.trim();
    this.heroService.searchHero(toSearchHero.value)
    .subscribe(heroes => {
      // this.searchResult = heroes
      console.log('search result--',heroes)
    })
  }

  activatNavItem(clickedItem): void {
    this.menuItems.map((menuItem: any) => {
      if (menuItem.item === clickedItem) {
        menuItem.activeStatus = true;
      } else {
        menuItem.activeStatus = false;
      }
    });
  }

}
