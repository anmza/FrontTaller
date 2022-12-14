import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehiculoModelo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {

  listadoVehiculos: ModeloVehiculo[] = [];

  constructor(private propietarioService: VehiculoService) { }

  ngOnInit(): void {

    this.ObtenerListadoPropietarios()
  }

  ObtenerListadoPropietarios (){

    this.propietarioService.ObtenerVehiculo().subscribe((datos: ModeloVehiculo[]) =>{

      this.listadoVehiculos = datos;
    } )
  }

}
