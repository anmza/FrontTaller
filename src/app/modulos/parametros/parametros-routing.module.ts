import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarJefeOperacionesComponent } from './jefeOperaciones/buscar-jefe-operaciones/buscar-jefe-operaciones.component';
import { CrearJefeOperacionesComponent } from './jefeOperaciones/crear-jefe-operaciones/crear-jefe-operaciones.component';
import { EditarJefeOperacionesComponent } from './jefeOperaciones/editar-jefe-operaciones/editar-jefe-operaciones.component';
import { EliminarJefeOperacionesComponent } from './jefeOperaciones/eliminar-jefe-operaciones/eliminar-jefe-operaciones.component';
import { BuscarMecanicoComponent } from './mecanico/buscar-mecanico/buscar-mecanico.component';
import { CrearMecanicoComponent } from './mecanico/crear-mecanico/crear-mecanico.component';
import { EditarMecanicoComponent } from './mecanico/editar-mecanico/editar-mecanico.component';
import { EliminarMecanicoComponent } from './mecanico/eliminar-mecanico/eliminar-mecanico.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietario/eliminar-propietario/eliminar-propietario.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [

  {
    path: "Buscar-jefe",
    component: BuscarJefeOperacionesComponent
  },
  
  {
    path: "crear-jefe",
    component: CrearJefeOperacionesComponent
  },

  {
    path: "editar-jefe",
    component: EditarJefeOperacionesComponent
  },

  {
    path: "eliminar-jefe",
    component: EliminarJefeOperacionesComponent
  },

  {
    path: "buscar-mecanico",
    component: BuscarMecanicoComponent
  },
  
  {
    path: "crear-mecanico",
    component: CrearMecanicoComponent
  },
  
  {
    path: "editar-mecanico",
    component: EditarMecanicoComponent
  },

  {
    path: "eliminar-mecanico",
    component: EliminarMecanicoComponent
  },

  {
    path: "buscar-propietario",
    component: BuscarPropietarioComponent
  },

  {
    path: "crear-propietario",
    component: CrearPropietarioComponent
  },

  {
    path: "editar-propietario/:Id",
    component: EditarPropietarioComponent
  },

  {
    path: "eliminar-propietario",
    component: EliminarPropietarioComponent
  },

  {
    path: "buscar-vehiculo",
    component: BuscarVehiculoComponent
  },

  {
    path: "crear-vehiculo",
    component: CrearVehiculoComponent
  },

  {
    path: "editar-vehiculo",
    component: EditarVehiculoComponent
  },

  {
    path: "eliminar-vehiculo",
    component: EliminarVehiculoComponent
  },
  
  
  
  
  
  
  
  
  
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
