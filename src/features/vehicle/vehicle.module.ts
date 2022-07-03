import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [VehicleComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class VehicleModule {}
