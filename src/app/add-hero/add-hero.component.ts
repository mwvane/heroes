import { Component, ViewChild } from '@angular/core';
import { Helpers } from '../helper';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model.hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent {
  constructor(private heroService: HeroesService, private helper: Helpers) {}
  @ViewChild('name') inputName;
  onSave(name: string) {
    let hero: Hero = { name, id: this.helper.getId() };
    this.heroService.addHero(hero);
    this.inputName.nativeElement.value = '';
  }
}
