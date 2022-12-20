import { Injectable } from '@angular/core';
import { Hero } from './model.hero';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor() {
    let tmp = JSON.parse(localStorage.getItem('heroes'));
    if (tmp.length) {
      this.heroes = tmp;
    }
  }
  private heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];
  private topHroes: Hero[] = [
    this.heroes[1],
    this.heroes[4],
    this.heroes[2],
    this.heroes[3],
  ];
  private findById(id) {
    return this.heroes.find((hero) => hero.id == id);
  }
  getHeroes() {
    return this.heroes;
  }
  getHeroById(id) {
    return this.findById(id);
  }
  getTopHeros() {
    return this.topHroes;
  }
  rename(id, name) {
    this.findById(id).name = name;
    this.save();
  }
  addHero(hero: Hero) {
    this.heroes.unshift(hero);
    this.save();
  }
  deleteHero(heroId) {
    // this.heroes = this.heroes.filter(id => id != heroId)
    //not worcking
    let index = null;
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id == heroId) {
        index = i;
        break;
      }
    }
    if (index != null) {
      this.heroes.splice(index, 1);
    }
    this.save();
  }
  private save() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }
}
