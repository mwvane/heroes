import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() clickOnDashboard: EventEmitter<any> = new EventEmitter();
  @Output() clickOnHeroes: EventEmitter<any> = new EventEmitter();
  onDashboardClick() {
    this.clickOnDashboard.emit()
  }
  onHeroesClick() {
    this.clickOnHeroes.emit();
  }
}
