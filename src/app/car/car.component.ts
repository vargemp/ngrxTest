import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { buildNewCar, refuelCar, driveCar, getApiCar } from './state';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //this.newCar();
    this.car$ = this.store.pipe(select(state => state.car));
  }

  newCar() {
    //this.store.dispatch(buildNewCar());
    this.store.dispatch(getApiCar());
  }

  drive(distance: number) {
    this.store.dispatch(driveCar({distance: distance}));
  }

  refuel(amount: number) {
    this.store.dispatch(refuelCar({fuelAmount: amount}));
  }
}
