import { Component } from "@angular/core";





@Component({
    
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'

})
export class HeroeComponent{

    //variables para el html
    nombre:string="Iroman";
    edad:number =45

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //Metodo
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spirderman';

    }

    cambiarEdad():void{
        this.edad=30;
    }


}