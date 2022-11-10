import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CrearRepuestoComponent } from './repuesto/crear-repuesto/crear-repuesto.component';
import { EditarRepuestoComponent } from './repuesto/editar-repuesto/editar-repuesto.component';
import { BuscarRepuestoComponent } from './repuesto/buscar-repuesto/buscar-repuesto.component';
import { EliminarRepuestoComponent } from './repuesto/eliminar-repuesto/eliminar-repuesto.component';
import { CrearRevisionComponent } from './revision/crear-revision/crear-revision.component';
import { EditarRevisionComponent } from './revision/editar-revision/editar-revision.component';
import { BuscarRevisionComponent } from './revision/buscar-revision/buscar-revision.component';
import { EliminarRevisionComponent } from './revision/eliminar-revision/eliminar-revision.component';
import { CrearSolicitudRevisionComponent } from './solicitudRevision/crear-solicitud-revision/crear-solicitud-revision.component';
import { EditarSolicitudRevisionComponent } from './solicitudRevision/editar-solicitud-revision/editar-solicitud-revision.component';
import { BuscarSolicitudRevisionComponent } from './solicitudRevision/buscar-solicitud-revision/buscar-solicitud-revision.component';
import { EliminarSolicitudRevisionComponent } from './solicitudRevision/eliminar-solicitud-revision/eliminar-solicitud-revision.component';


@NgModule({
  declarations: [
    CrearRepuestoComponent,
    EditarRepuestoComponent,
    BuscarRepuestoComponent,
    EliminarRepuestoComponent,
    CrearRevisionComponent,
    EditarRevisionComponent,
    BuscarRevisionComponent,
    EliminarRevisionComponent,
    CrearSolicitudRevisionComponent,
    EditarSolicitudRevisionComponent,
    BuscarSolicitudRevisionComponent,
    EliminarSolicitudRevisionComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
