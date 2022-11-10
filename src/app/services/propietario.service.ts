import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPropietario } from '../modelos/propietarioModelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

url = 'http://localhost:3000';
token: String = '';

  constructor(private http: HttpClient, private seguridadService: SeguridadService) { 

    this.seguridadService.ObtenerToken();
  }

  ObtenerPropietario(): Observable<ModeloPropietario[]>{

    return this.http.get<ModeloPropietario[]>(`${this.url}/propietarios`)

  }

  CrearPropietario(propietario: ModeloPropietario): Observable<ModeloPropietario>{

    return this.http.post<ModeloPropietario>(`${this.url}/propietarios`, propietario,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }

  EditarPropietario(propietario: ModeloPropietario): Observable<ModeloPropietario>{

    return this.http.put<ModeloPropietario>(`${this.url}/propietarios`, propietario,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }

  EliminarPropietario(id: string): Observable<any>{

    return this.http.delete(`${this.url}/propietarios/${id}`,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }
}
