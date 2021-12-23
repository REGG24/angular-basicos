import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
