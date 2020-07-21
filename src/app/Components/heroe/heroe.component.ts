import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any= {};

  constructor( private activateRoute:ActivatedRoute, private heroeService:HeroesService) {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe= this.heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
   }

  ngOnInit(): void {
  }

}
