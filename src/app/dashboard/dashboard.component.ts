import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private heroService: HeroesService, private route: Router) {}
  topHeroes: Hero[] = this.heroService.getTopHeros();
  onTopbtnClick(id) {
    this.route.navigateByUrl(`/detail/${id}`);
  }
}
