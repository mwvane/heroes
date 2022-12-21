import { Injectable } from '@angular/core';
import { HeroesService } from './heroes.service';
@Injectable({ providedIn: 'root' })
export class Helpers {
  constructor(private heroService: HeroesService) {}

  getId() {
    let heroes = this.heroService.getHeroes();
    return heroes.reduce((final, current)=>{
      return Math.max(final, current.id)
    },0) + 1
  }
}
