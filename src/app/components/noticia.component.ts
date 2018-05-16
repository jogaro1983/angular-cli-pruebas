import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoticiaService } from '../services/noticias.service';


@Component({
selector: 'lista-noticias',
templateUrl: '../views/noticias-list.html',
providers: [NoticiaService]
})


export class NoticiasComponent{

    public noticia: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _noticiaService: NoticiaService){
        this.noticia = 'Listado de Noticias';
    }

    devuelveNoticia()
    {
        return this._noticiaService.getNoticias('Llega la noticia....');
    }

    ngOnInit()
    {
        console.log("NoticiasComponent");
    }
}