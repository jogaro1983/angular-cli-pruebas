import {Component, OnInit} from '@angular/core';


@Component({
    selector:'error',
    templateUrl:'../views/error.html'
})

export class ErrorComponent{

    public titulo: string;
    public dato:string;

    constructor()
    {
        this.titulo = 'Página Error';
    }

    ngOnInit(){
        console.log('Se ha cargado el componente error.');
    }
}