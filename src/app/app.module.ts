import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroeComponent } from './hero/hero.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { DetailComponent } from './detail/detail.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { Helpers } from './helper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HeroeComponent,
    HeroItemComponent,
    DetailComponent,
    AddHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
