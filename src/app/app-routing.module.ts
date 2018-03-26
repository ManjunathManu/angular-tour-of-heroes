import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './../app/heroes/heroes.component'
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component:HeroDetailComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

