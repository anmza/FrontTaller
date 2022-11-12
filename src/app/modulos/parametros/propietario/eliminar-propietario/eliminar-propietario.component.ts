import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPropietario } from 'src/app/modelos/propietarioModelo';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-eliminar-propietario',
  templateUrl: './eliminar-propietario.component.html',
  styleUrls: ['./eliminar-propietario.component.css']
})
export class EliminarPropietarioComponent implements OnInit {

  Id: string = "";
  Nombre: string = "";
  Documento: number = 0;

  constructor( private servicioPropietario: PropietarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.Id = this.route.snapshot.params["Id"];
    this.BuscarPropietario();
  }

  BuscarPropietario(){

    let Id  = this.route.snapshot.params["Id"];

    this.servicioPropietario.ObtenerPropietarioPorId(this.Id).subscribe({

      next:(datos: ModeloPropietario) => {

        if(datos.Id && datos.Nombre && datos.Documento){
        this.Id = datos.Id;
        this.Nombre = datos.Nombre;
        this.Documento = datos.Documento;
        }
      }
    });
  }

 BorrarPropietario(){ 

  this.servicioPropietario.EliminarPropietario(this.Id).subscribe({

    next: (datos: any) => {

      alert("Propietario eliminado con exito")
      this.router.navigate(['/parametros/buscar-propietario']);

    }
  })

 }


}
