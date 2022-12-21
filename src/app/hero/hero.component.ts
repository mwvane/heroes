import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroeComponent {
  constructor(private heroService : HeroesService, private router: Router){

  }
  onItemClick(id){
    this.router.navigateByUrl(`/detail/${id}`)
  }
  heroes: Hero[] = this.heroService.getHeroes()
  onAddClick(){
    this.router.navigateByUrl("/add-hero")
  }
  onDelete(id){
    this.heroService.deleteHero(id)
  }
}