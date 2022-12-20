import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';
import { Location } from '@angular/common';
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
    private loaction: Location,
   ){

  }
  ngOnInit(){
    this.item = this.heroService.getHeroById(this.routeActivated.snapshot.paramMap.get('id'))
  }
  onBackClick(){
    this.loaction.back(); 
  }
  onTextChange(name,id){
    this.heroService.rename(id,name)
  }
}
