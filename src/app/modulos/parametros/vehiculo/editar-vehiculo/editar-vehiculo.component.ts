import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculoModelo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

declare const InitSelects: any;

@Component({ 
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  public numeros: number[]= Array.from({length: 2024 - 1960}, (f, g) => g + 1960);

  Id: string = '';

  fgValidator: FormGroup = this.fb.group({

    'Id':['', [Validators.required]],
    'Placa': ['', [Validators.required]],
    'Marca': ['', [Validators.required]],
    'Modelo': ['', [Validators.required]],
    'Pasajeros': ['', [Validators.required]],
    'Motor': ['', [Validators.required]],
    'Pais': ['', [Validators.required]],
    'Descripcion': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private servicioVehiculo: VehiculoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.Id = this.route.snapshot.params["Id"];
    this.BuscarVehiculo();
    setTimeout(() => {
      InitSelects();
    }, 500);
  }

  BuscarVehiculo(){

    this.servicioVehiculo.ObtenerVehiculoPorId(this.Id).subscribe((datos: ModeloVehiculo) => {

      this.fgValidator.controls["Id"].setValue(datos.Id);
      this.fgValidator.controls["Placa"].setValue(datos.Placa);
      this.fgValidator.controls["Marca"].setValue(datos.Marca);
      this.fgValidator.controls["Modelo"].setValue(datos.Modelo);
      this.fgValidator.controls["Pasajeros"].setValue(datos.Pasajeros);
      this.fgValidator.controls["Motor"].setValue(datos.Motor);
      this.fgValidator.controls["Pais"].setValue(datos.Pais);
      this.fgValidator.controls["Descripcion"].setValue(datos.Descripcion);
    });
  }

  EditarVehiculo(){

    let Placa = this.fgValidator.controls["Placa"].value;
    let Marca = this.fgValidator.controls["Marca"].value;
    let Modelo = parseInt(this.fgValidator.controls["Modelo"].value);
    let Pasajeros = parseInt(this.fgValidator.controls["Pasajeros"].value);
    let Motor = this.fgValidator.controls["Motor"].value;
    let Pais = this.fgValidator.controls["Pais"].value;
    let Descripcion = this.fgValidator.controls["Descripcion"].value;
    let p = new ModeloVehiculo();
    p.Placa = Placa;
    p.Marca = Marca;
    p.Modelo = Modelo;
    p.Pasajeros = Pasajeros;
    p.Motor = Motor;
    p.Pais = Pais;
    p.Descripcion = Descripcion
    p.Id = this.Id;

    this.servicioVehiculo.EditarVehiculo(p).subscribe((datos: ModeloVehiculo) => {

      this.router.navigate(["/parametros/buscar-vehiculo"])
      alert(`Vehiculo ${p.Placa} ${p.Marca}, editado con exito `)
    }, (error: any)=>{
      alert("No se pudo editar Vehiculo")
    })
  }

}
