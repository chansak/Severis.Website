import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {vehicleRoutes} from '@module/admin/setting/master/vehicle/vehicle.routing'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(vehicleRoutes),
  ]
})
export class VehicleModule { }
