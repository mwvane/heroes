import { Injectable } from "@angular/core";
import { Hero } from "./model.hero";

@Injectable({providedIn: "root"})
export class HeroesService {
    private heroes: Hero[] = [
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
      ];
      getHeroes(){
        return this.heroes
      }
}