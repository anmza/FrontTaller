import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './publico/error/not-found/not-found.component';
import { HomeComponent } from './publico/general/home/home.component';

const routes: Routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/home"
  },

  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x =>x.SeguridadModule)
  },

  {
    path: "parametros",
    loadChildren: () => import("./modulos/parametros/parametros.module").then(x =>x.ParametrosModule)
  },

  {
    path: "servicios",
    loadChildren: () => import("./modulos/servicios/servicios.module").then(x =>x.ServiciosModule)
  },

  {
    path: "reporte",
    loadChildren: () => import("./modulos/reporte/reporte.module").then(x =>x.ReporteModule)
  },

  {
    path: "**",
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
