import {Component, OnInit} from '@angular/core';


@Component({
    selector:'error',
    templateUrl:'../views/error.html'
})

export class ErrorComponent{

    public titulo: string;
    public dato:string;
    public fecha:string;
    public info:string;

    constructor()
    {
        this.titulo = 'Página Error';
        this.titulo = 'La página que está buscando no está disponible';
        this.info = 'Página de error';
    }

    ngOnInit(){
        console.log('Se ha cargado el componente error.');
    }
}