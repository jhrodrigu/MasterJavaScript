import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
  public Zapatillas: Array<Zapatilla>;

  constructor(){
    this.Zapatillas = [
      new Zapatilla('Reebook classic', 'Reebook', 'Blancos', 80, true),
      new Zapatilla('Nike', 'Nike', 'Negros', 70, true),
      new Zapatilla('Adidas', 'Adidas', 'Gris', 180, false),
    ];
  }

  getTexto(){
    return 'Desde un servicio';
  }

  getZapatillas(): Array<Zapatilla>{
    return this.Zapatillas;
  }
}