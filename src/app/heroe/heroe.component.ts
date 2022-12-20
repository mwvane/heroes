import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  constructor(private heroService : HeroesService){

  }
  heroes: Hero[] = this.heroService.getHeroes()
}