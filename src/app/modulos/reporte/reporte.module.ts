import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteRevisionMensualComponent } from './reporteRevisiones/reporte-revision-mensual/reporte-revision-mensual.component';
import { ReporteRevisionVehiculoComponent } from './reporteRevisiones/reporte-revision-vehiculo/reporte-revision-vehiculo.component';
import { ReporteRepuestoMensualComponent } from './reporteRepuesto/reporte-repuesto-mensual/reporte-repuesto-mensual.component';
import { ReporteRepuestoVentaComponent } from './reporteRepuesto/reporte-repuesto-venta/reporte-repuesto-venta.component';


@NgModule({
  declarations: [
    ReporteRevisionMensualComponent,
    ReporteRevisionVehiculoComponent,
    ReporteRepuestoMensualComponent,
    ReporteRepuestoVentaComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
