import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  datosUsuarioSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {

    this.VerificarSesionActiva();

   }


   obtenerDatosUsuarioSesion(){

    return this.datosUsuarioSesion.asObservable();

   }


  VerificarSesionActiva(){

    let datos = this.ObtenerInfoSesion();

    if(datos){

      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){

    this.datosUsuarioSesion.next(datos);

  }

  Identificar(Usuario: string, Clave: string): Observable<ModeloIdentificar>{

    return this.http.post<ModeloIdentificar>('http://localhost:3000/identificarJefe', {

      Usuario: Usuario,
      Clave: Clave
    }, {

      headers: new HttpHeaders({


      })
    })

  }

  AlmacenarSesion(datos: ModeloIdentificar){

    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInfoSesion() {

    let datosString = localStorage.getItem("datosSesion");

    if(datosString){

      let datos = JSON.parse(datosString);
      return datos;
    }else{

      return null;
    }
  }

  EliminarInfoSesion(){

    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SesionIniciada(){

    let datosString = localStorage.getItem("datosSesion");
    return datosString

  }

  ObtenerToken(){

    let datosString = localStorage.getItem("datosSesion");

    if(datosString){

      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{

      return '';

    }
  }

  

}

