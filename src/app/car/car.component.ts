import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { buildNewCar, refuelCar, driveCar } from './state';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car$: Observable<any>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('ngOnInit of car fired!');
    //this.newCar();
    this.car$ = this.store.pipe(select(state => state.car));
    console.log(this.car$);
  }

  newCar() {
    this.store.dispatch(buildNewCar());
  }

  drive(distance: number) {
    this.store.dispatch(driveCar({distance: distance}));
  }

  refuel(amount: number) {
    this.store.dispatch(refuelCar({fuelAmount: amount}));
  }
}
