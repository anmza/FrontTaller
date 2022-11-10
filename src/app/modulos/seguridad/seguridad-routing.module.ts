import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarContraseniaComponent } from './general/cambiar-contrasenia/cambiar-contrasenia.component';
import { CerrarSesionComponent } from './general/cerrar-sesion/cerrar-sesion.component';
import { InicioSesionComponent } from './general/inicio-sesion/inicio-sesion.component';
import { RecuperarContraseniaComponent } from './general/recuperar-contrasenia/recuperar-contrasenia.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [

{
  path: "inicio",
  component: InicioSesionComponent
},
{
  path: "salir",
  component: CerrarSesionComponent
},

{
  path: "cambiar-clave",
  component: CambiarContraseniaComponent
},
{
  path: "recuperar-clave",
  component: RecuperarContraseniaComponent
},

{
  path: "buscar-usuario",
  component: BuscarUsuarioComponent
},

{
  path: "crear-usuario",
  component: CrearUsuarioComponent
},

{
  path: "editar-usuario",
  component: EditarUsuarioComponent
},

{
  path: "eliminar-usuario",
  component: EliminarUsuarioComponent
},







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
