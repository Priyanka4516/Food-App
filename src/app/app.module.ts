import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { PlansComponent } from './plans/plans.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponentComponent,
    NavigationBarComponent,
    CarouselComponent,
    CardsComponent,
    PlansComponent,
    MapComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
