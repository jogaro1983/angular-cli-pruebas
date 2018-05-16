import {Component, OnInit} from '@angular/core';


@Component({
    selector:'home',
    templateUrl:'../views/home.html'
})

export class HomeComponent{

    public titulo: string;

    constructor()
    {
        this.titulo = 'Página Principal';
    }

    ngOnInit(){
        console.log('HomeComponent');
    }
}