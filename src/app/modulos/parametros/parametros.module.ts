import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearJefeOperacionesComponent } from './jefeOperaciones/crear-jefe-operaciones/crear-jefe-operaciones.component';
import { EditarJefeOperacionesComponent } from './jefeOperaciones/editar-jefe-operaciones/editar-jefe-operaciones.component';
import { BuscarJefeOperacionesComponent } from './jefeOperaciones/buscar-jefe-operaciones/buscar-jefe-operaciones.component';
import { EliminarJefeOperacionesComponent } from './jefeOperaciones/eliminar-jefe-operaciones/eliminar-jefe-operaciones.component';
import { CrearMecanicoComponent } from './mecanico/crear-mecanico/crear-mecanico.component';
import { EditarMecanicoComponent } from './mecanico/editar-mecanico/editar-mecanico.component';
import { BuscarMecanicoComponent } from './mecanico/buscar-mecanico/buscar-mecanico.component';
import { EliminarMecanicoComponent } from './mecanico/eliminar-mecanico/eliminar-mecanico.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { CrearPropietarioComponent } from './propietario/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietario/editar-propietario/editar-propietario.component';
import { BuscarPropietarioComponent } from './propietario/buscar-propietario/buscar-propietario.component';
import { EliminarPropietarioComponent } from './propietario/eliminar-propietario/eliminar-propietario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearJefeOperacionesComponent,
    EditarJefeOperacionesComponent,
    BuscarJefeOperacionesComponent,
    EliminarJefeOperacionesComponent,
    CrearMecanicoComponent,
    EditarMecanicoComponent,
    BuscarMecanicoComponent,
    EliminarMecanicoComponent,
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    BuscarVehiculoComponent,
    EliminarVehiculoComponent,
    CrearPropietarioComponent,
    EditarPropietarioComponent,
    BuscarPropietarioComponent,
    EliminarPropietarioComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
