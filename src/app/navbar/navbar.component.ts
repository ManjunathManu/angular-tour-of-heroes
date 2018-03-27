import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { findIndex } from 'rxjs/operator/findIndex';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItems: Array<Object> = [{ item: "Dashboard", activeStatus: true, route: "/dashboard" },
  { item: "Heroes", activeStatus: false, route: "/heroes" }];

  public activeItem: Object = this.menuItems[0]

  private index: number;
  constructor() { }

  ngOnInit() {
  }
  toSearchHero: Hero;
  searchHero(): void {
    console.log(this.toSearchHero);
    console.log(event)
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
