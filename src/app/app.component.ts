import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){

  }
  title = 'tour-of-heroes';
  onHeroes(){
    this.router.navigateByUrl("/heroes")
  }
  onDashboard(){
    console.log("on dashboard")
    this.router.navigate['/dashboard']
  }
}
