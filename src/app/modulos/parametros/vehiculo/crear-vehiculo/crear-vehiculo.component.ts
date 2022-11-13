import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ModeloVehiculo } from 'src/app/modelos/vehiculoModelo';

declare const InitSelects: any;

@Component({ 
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

public numeros: number[]= Array.from({length: 2024 - 1960}, (f, g) => g + 1960);

  fgValidator: FormGroup = this.fb.group({

    'Placa': ['', [Validators.required]],
    'Marca': ['', [Validators.required]],
    'Modelo': ['', [Validators.required]],
    'Pasajeros': ['', [Validators.required]],
    'Motor': ['', [Validators.required]],
    'Pais': ['', [Validators.required]],
    'Descripcion': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private servicioVehiculo: VehiculoService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      InitSelects();
    }, 500);

  
  }

  


  GuardarVehiculo(){ 

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

    this.servicioVehiculo.CrearVehiculo(p).subscribe((datos: ModeloVehiculo) => {

      this.router.navigate(["/parametros/buscar-vehiculo"])
      alert("Vehículo registrado correctamente")
    }, (error: any)=>{
      alert("No se pudo registrar vehículo")
    })
  }
}
