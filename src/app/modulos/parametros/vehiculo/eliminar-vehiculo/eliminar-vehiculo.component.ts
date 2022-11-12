import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculoModelo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  Id: string = "";
  Placa: string = "";
  Marca: string = "";

  constructor( private servicioVehiculo: VehiculoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.Id = this.route.snapshot.params["Id"];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){

    let Id  = this.route.snapshot.params["Id"];

    this.servicioVehiculo.ObtenerVehiculoPorId(this.Id).subscribe({

      next:(datos: ModeloVehiculo) => {

        if(datos.Id && datos.Placa && datos.Marca){
        this.Id = datos.Id;
        this.Placa = datos.Placa;
        this.Marca = datos.Marca;
        }
      }
    });
  }

 BorrarVehiculo(){ 

  this.servicioVehiculo.EliminarVehiculo(this.Id).subscribe({

    next: (datos: any) => {

      alert("Vehiculo eliminado con exito")
      this.router.navigate(['/parametros/buscar-vehiculo']);

    }
  })

 }

}
