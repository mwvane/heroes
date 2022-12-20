import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  item: Hero
  constructor(
    private routeActivated: ActivatedRoute,
    private heroService: HeroesService,
    private route: Router,
   ){

  }
  ngOnInit(){
    this.item = this.heroService.getHeroById(this.routeActivated.snapshot.paramMap.get('id'))
    debugger
  }
  onBackClick(){
    this.route.navigateByUrl("/heroes")
  }
}
