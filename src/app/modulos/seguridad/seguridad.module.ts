import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioSesionComponent } from './general/inicio-sesion/inicio-sesion.component';
import { CerrarSesionComponent } from './general/cerrar-sesion/cerrar-sesion.component';
import { CambiarContraseniaComponent } from './general/cambiar-contrasenia/cambiar-contrasenia.component';
import { RecuperarContraseniaComponent } from './general/recuperar-contrasenia/recuperar-contrasenia.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioSesionComponent,
    CerrarSesionComponent,
    CambiarContraseniaComponent,
    RecuperarContraseniaComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
