import { Injectable, OnInit } from '@angular/core';
import { Hero } from './model.hero';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  constructor() {
    let tmp = localStorage.getItem('heroes');
    if (tmp !== null) {
      this.heroes = JSON.parse(tmp);
    }
    this.getTopHeroes();
    let x = this.topHroes;
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
  private topHroes: Hero[];
  getHeroes() {
    return this.heroes;
  }
  getTopHeroes() {
    this.topHroes = [
      this.heroes[1],
      this.heroes[4],
      this.heroes[2],
      this.heroes[3],
    ];
  }
  getHeroById(id) {
    return this.heroes.find((hero) => hero.id == id);
  }
  getTopHeros() {
    return this.topHroes;
  }
  rename(id, name) {
    const hero = this.getHeroById(id)
    hero.name = name
    this.saveHeroes();
  }
  addHero(hero: Hero) {
    this.heroes.unshift(hero);
    this.saveHeroes();
  }
  deleteHero(heroId) {
    // this.heroes = this.heroes.filter((hero) => hero.id != heroId)
    const index = this.heroes.findIndex((hero) => hero.id == heroId);
    if (index >= 0) {
      this.heroes.splice(index, 1);
    }
    this.saveHeroes();
  }
  private saveHeroes() {
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
  }
}
