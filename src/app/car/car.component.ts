import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { buildNewCar, refuelCar, driveCar, loadApiCar, Car, carLoadError } from './state';
import { Pipe, PipeTransform } from '@angular/core';
import { CarService } from './state/car.service';
import { map, defaultIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car$: Observable<any> = this.store.pipe(select(state => state.car));
  carLoaded = false;

  constructor(private store: Store<AppState>, private service: CarService) { }

  ngOnInit() {
    // this.newCar();
    this.service.getOther();
  }

  newCar() {
    this.store.dispatch(loadApiCar());
    this.car$.subscribe(val => {
      if (val.errorMsg === '') {
        this.carLoaded = true;
      }

      console.log('car observer error msg', val.errorMsg);
    });
  }

  drive(distance: number) {
    this.store.dispatch(driveCar({distance: distance}));
  }

  refuel(amount: number) {
    this.store.dispatch(refuelCar({fuelAmount: amount}));
  }

  isCarLoaded() {

  }
}

@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}

