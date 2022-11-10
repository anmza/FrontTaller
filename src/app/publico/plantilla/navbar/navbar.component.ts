import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/modelo.usuario';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  SesionActiva: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {

    this.subs = this.seguridadService.obtenerDatosUsuarioSesion().subscribe((datos: ModeloIdentificar) =>{

      this.SesionActiva = datos.estaIdentificado;
    })
  }

}
