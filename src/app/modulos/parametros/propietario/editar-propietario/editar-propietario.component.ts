import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietarioModelo';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html',
  styleUrls: ['./editar-propietario.component.css']
})
export class EditarPropietarioComponent implements OnInit {
  Id: string = '';

  fgValidator: FormGroup = this.fb.group({

    'Id':['', [Validators.required]],
    'Nombre': ['', [Validators.required]],
    'Apellido': ['', [Validators.required]],
    'Telefono': ['', [Validators.required]],
    'Documento': ['', [Validators.required]],
    'Ciudad': ['', [Validators.required]],
    'Correo': ['', [Validators.required]],

  });

  constructor(private fb: FormBuilder, private servicioPropietario: PropietarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.Id = this.route.snapshot.params["Id"];
    this.BuscarPropietario();
  }

  BuscarPropietario(){

    this.servicioPropietario.ObtenerPropietarioPorId(this.Id).subscribe((datos: ModeloPropietario) => {

      this.fgValidator.controls["Id"].setValue(datos.Id);
      this.fgValidator.controls["Nombre"].setValue(datos.Nombre);
      this.fgValidator.controls["Apellido"].setValue(datos.Apellido);
      this.fgValidator.controls["Telefono"].setValue(datos.Telefono);
      this.fgValidator.controls["Documento"].setValue(datos.Documento);
      this.fgValidator.controls["Ciudad"].setValue(datos.Ciudad);
      this.fgValidator.controls["Correo"].setValue(datos.Correo);
    });
  }

  EditarPropietario(){

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
    p.Id = this.Id;

    this.servicioPropietario.EditarPropietario(p).subscribe((datos: ModeloPropietario) => {

      this.router.navigate(["/parametros/buscar-propietario"])
      alert(`Propietario ${p.Nombre} ${p.Apellido}, editado con exito `)
    }, (error: any)=>{
      alert("No se pudo editar propietario")
    })
  }

}
