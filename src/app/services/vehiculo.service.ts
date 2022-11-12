import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculoModelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService { 

  url = 'http://localhost:3000';
token: String = '';

  constructor(private http: HttpClient, private seguridadService: SeguridadService) { 

    this.seguridadService.ObtenerToken();
  }

  ObtenerVehiculo(): Observable<ModeloVehiculo[]>{

    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)

  }

  ObtenerVehiculoPorId(Id: string): Observable<ModeloVehiculo>{

    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${Id}`)

  }

  CrearVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{

    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }

  EditarVehiculo(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo>{

    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.Id}`, vehiculo,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }

  EliminarVehiculo(id: string): Observable<any>{

    return this.http.delete(`${this.url}/vehiculos/${id}`,{

      headers: new HttpHeaders({

        'Authorization': `Bearer ${this.token}`

      })
    })


  }
}
