import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-heroes';
  onHeroes(){
    console.log("on heroes")
  }
  onDashboard(){
    console.log("on dashboard")
  }
}
