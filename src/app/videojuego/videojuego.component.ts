import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
// El nombre de la clase es la que se envia a app.mudule.ts para que se puede mostrar en html
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = 'Componente de Video Juegos';
        this.listado = 'Listado de juegos';

        // console.log('Se ha cargado perfectamente el componente video juego');
    }
    ngOnInit(): void {
        // console.log('OnInit ejecutado');
    }

    ngDoCheck(){
        // console.log('DoCheckn ejecutado')
    }

    ngOnDestroy(){
        // console.log('OnDestroy')
    }

    cambiarTilulo(){
        this.titulo = 'Nuevo titulo del componente';
    }
}