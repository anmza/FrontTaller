import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarRepuestoComponent } from './repuesto/buscar-repuesto/buscar-repuesto.component';
import { CrearRepuestoComponent } from './repuesto/crear-repuesto/crear-repuesto.component';
import { EditarRepuestoComponent } from './repuesto/editar-repuesto/editar-repuesto.component';
import { EliminarRepuestoComponent } from './repuesto/eliminar-repuesto/eliminar-repuesto.component';
import { BuscarRevisionComponent } from './revision/buscar-revision/buscar-revision.component';
import { CrearRevisionComponent } from './revision/crear-revision/crear-revision.component';
import { EditarRevisionComponent } from './revision/editar-revision/editar-revision.component';
import { EliminarRevisionComponent } from './revision/eliminar-revision/eliminar-revision.component';
import { BuscarSolicitudRevisionComponent } from './solicitudRevision/buscar-solicitud-revision/buscar-solicitud-revision.component';
import { CrearSolicitudRevisionComponent } from './solicitudRevision/crear-solicitud-revision/crear-solicitud-revision.component';
import { EditarSolicitudRevisionComponent } from './solicitudRevision/editar-solicitud-revision/editar-solicitud-revision.component';
import { EliminarSolicitudRevisionComponent } from './solicitudRevision/eliminar-solicitud-revision/eliminar-solicitud-revision.component';

const routes: Routes = [

  {
    path: "buscar-repuesto",
    component: BuscarRepuestoComponent
  },

  {
    path: "crear-repuesto",
    component: CrearRepuestoComponent
  },

  {
    path: "editar-repuesto",
    component: EditarRepuestoComponent
  },

  {
    path: "Eliminar-repuesto",
    component: EliminarRepuestoComponent
  },

  {
    path: "buscar-revision",
    component: BuscarRevisionComponent
  },

  {
    path: "crear-revision",
    component: CrearRevisionComponent
  },

  {
    path: "editar-revision",
    component: EditarRevisionComponent
  },

  {
    path: "eliminar-revision",
    component: EliminarRevisionComponent
  },

  {
    path: "buscar-solicitud",
    component: BuscarSolicitudRevisionComponent
  },

  {
    path: "crear-solicitud",
    component: CrearSolicitudRevisionComponent
  },
  
  {
    path: "editar-solicitud",
    component: EditarSolicitudRevisionComponent
  },

  {
    path: "eliminar-solicitud",
    component: EliminarSolicitudRevisionComponent
  },
  
  
  
  
  
  
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
