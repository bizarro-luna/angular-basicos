import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{


    private _personajes:Personaje[]=[
        {
          nombre:'Goku',
          poder:6000
        },
        {
          nombre:'Vegeta',
          poder:5000
        }
      ];


      get personajes():Personaje[]{
          return [...this._personajes];
      }


    constructor(){
    
        console.log('Servicio inicializado');

    }

    agregarPersonajes(personaje:Personaje){
        this._personajes.push(personaje);
    }



}