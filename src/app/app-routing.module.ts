import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { HeroeComponent } from './heroe/heroe.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "heroes", component: HeroeComponent},
  {path: "detail/:id", component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
