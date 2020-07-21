import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Services
import {HeroesService} from './services/heroes.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { EncontradosComponent } from './Components/encontrados/encontrados.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    HeroeComponent,
    EncontradosComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
