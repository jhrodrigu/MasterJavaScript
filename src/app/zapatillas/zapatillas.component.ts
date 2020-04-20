import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'marcazapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit {
  public titulo: string = 'Marca de Zapatillas';
  public Zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;
  public addmarca: string;

  constructor(
    private zapatillaService: ZapatillaService
  ) {
    this.mi_marca = 'fila';
    this.color = 'yellow';
    this.marcas = new Array();
    
  }

  ngOnInit() {
    this.Zapatillas = this.zapatillaService.getZapatillas()
    // alert(this.zapatillaService.getTexto());
    this.getMarcas();
  }

  getMarcas() {
    // tslint:disable-next-line: no-shadowed-variable
    this.Zapatillas.forEach((Zapatilla, index) => {
      if (this.marcas.indexOf(Zapatilla.marca) < 0) {
        this.marcas.push(Zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice) {
    // delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }
  mostrarpalabra() {
    alert("Esta mierda funciona");
  }
}
