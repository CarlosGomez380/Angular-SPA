import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encontrados',
  templateUrl: './encontrados.component.html',
  styles: [
  ]
})
export class EncontradosComponent implements OnInit {

  encontrados:any[]=[];
  termino:string;

  constructor(private heroesService: HeroesService, private activateRoute:ActivatedRoute, private router:Router) { 

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.termino=params['nombre'];
      console.log(params['nombre']);
      this.encontrados= this.heroesService.buscarHeroes(params['nombre']);
      console.log(this.encontrados);
    });
    console.log(this.encontrados);
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe',index]);
  }


}
