import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car.actions';

@Injectable({
    providedIn: 'root'
  })
  export class CarService {
    constructor (private http: HttpClient) {}

    url = 'http://localhost:3000/cars';

    getAll() {
      return this.http.get<Car>(this.url);
    }
  }
