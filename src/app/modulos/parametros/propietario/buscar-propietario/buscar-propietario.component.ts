import { Component, OnInit } from '@angular/core';
import { ModeloPropietario } from 'src/app/modelos/propietarioModelo';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-buscar-propietario',
  templateUrl: './buscar-propietario.component.html',
  styleUrls: ['./buscar-propietario.component.css']
})
export class BuscarPropietarioComponent implements OnInit {

  listadoPropietarios: ModeloPropietario[] = [];

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit(): void {

    this.ObtenerListadoPropietarios()
  }

  ObtenerListadoPropietarios (){

    this.propietarioService.ObtenerPropietario().subscribe((datos: ModeloPropietario[]) =>{

      this.listadoPropietarios = datos;
    } )
  }

}
