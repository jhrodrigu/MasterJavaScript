import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;

  constructor(
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(){
    this.peticionesService.getUser().subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }

}

