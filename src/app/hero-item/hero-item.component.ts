import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Hero } from '../model.hero';


@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent {
  @Input() hero: Hero
  @Output() itemClick: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  onItemClick() {
    this.itemClick.emit()
  }
  onDelete(){
    this.delete.emit(this.hero.id)
  }
}
