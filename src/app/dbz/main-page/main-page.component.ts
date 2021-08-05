import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {


 
  
  nuevo:Personaje={
    nombre:'Escanor',
    poder:55000
  };

 
  
  
//  agregarNuevoPersonaje(argumento:Personaje):void{
    //Palabra para debuguear: debugger;
    //this.personajes.push(argumento);
  //}
 

  constructor(private dbzService:DbzService ){
  }


}
