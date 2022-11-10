import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Configuraciones } from 'src/app/config/Configuraciones';
import { SeguridadService } from 'src/app/services/seguridad.service';
const cryptoJS = require("crypto-js");

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {


  dataForm: FormGroup = this.fb.group({

    'username': ['', [Validators.required, Validators.email, Validators.minLength(5)]],
    'password': ['', [Validators.required, Validators.minLength(8)]]

  });

  constructor( private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {


  }


  identifyUser(){

    let usuario = this.dataForm.controls["username"].value;
    let clave = this.dataForm.controls["password"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe({
      
      next: (datos: any) =>{

    this.servicioSeguridad.AlmacenarSesion(datos);
    this.router.navigate(["/home"])

    },
    error: (error:any) => {

      alert("Los datos invalidos")

    },

    complete: () => {}
  
  });

    
  } 


  Login(){

    if(this.dataForm.invalid){

      ShowGeneralMessage(Configuraciones.mensajeFormularioInvalido);

    }else{

  

    }

  }

}
