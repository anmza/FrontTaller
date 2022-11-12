import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietarioModelo';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
  styleUrls: ['./crear-propietario.component.css']
})
export class CrearPropietarioComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({

    'Nombre': ['', [Validators.required]],
    'Apellido': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Ciudad': ['', [Validators.required]],
    'Correo': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private servicioPropietario: PropietarioService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPropietario(){ 

    let Nombre = this.fgValidator.controls["Nombre"].value;
    let Apellido = this.fgValidator.controls["Apellido"].value;
    let Telefono = parseInt(this.fgValidator.controls["Telefono"].value);
    let Documento = parseInt(this.fgValidator.controls["Documento"].value);
    let Ciudad = this.fgValidator.controls["Ciudad"].value;
    let Correo = this.fgValidator.controls["Correo"].value;
    let p = new ModeloPropietario();
    p.Nombre = Nombre;
    p.Apellido = Apellido;
    p.Telefono = Telefono;
    p.Documento = Documento;
    p.Ciudad = Ciudad;
    p.Correo = Correo;

    this.servicioPropietario.CrearPropietario(p).subscribe((datos: ModeloPropietario) => {

      this.router.navigate(["/parametros/buscar-propietario"])
      alert("Propietario almacenado correctamente")
    }, (error: any)=>{
      alert("No se pudo almacenar propirtario")
    })
  }

}
