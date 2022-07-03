import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick(vehicleForm: NgForm) {
    console.log(vehicleForm.value);
  }
}
