import { Injectable } from '@angular/core';
import { HeroesService } from './heroes.service';
@Injectable({ providedIn: 'root' })
export class Helpers {
  constructor(private heroService: HeroesService) {}
  
  getId() {
    let heroes = this.heroService.getHeroes();
    let maxId = heroes[0].id;
    for (let i = 1; i < heroes.length; i++) {
      if (maxId < heroes[i].id) {
        maxId = heroes[i].id;
      }
    }
    return maxId + 1;
  }
}
