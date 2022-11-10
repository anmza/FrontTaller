import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteRepuestoMensualComponent } from './reporteRepuesto/reporte-repuesto-mensual/reporte-repuesto-mensual.component';
import { ReporteRepuestoVentaComponent } from './reporteRepuesto/reporte-repuesto-venta/reporte-repuesto-venta.component';
import { ReporteRevisionMensualComponent } from './reporteRevisiones/reporte-revision-mensual/reporte-revision-mensual.component';
import { ReporteRevisionVehiculoComponent } from './reporteRevisiones/reporte-revision-vehiculo/reporte-revision-vehiculo.component';

const routes: Routes = [

  {
    path: "reporte-repuesto-mensual",
    component: ReporteRepuestoMensualComponent
  },

  {
    path: "reporte-repuesto-venta",
    component: ReporteRepuestoVentaComponent
  },

  {
    path: "reporte-revision-mensual",
    component: ReporteRevisionMensualComponent
  },

  {
    path: "reporte-revision-vehiculo",
    component: ReporteRevisionVehiculoComponent
  },
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
