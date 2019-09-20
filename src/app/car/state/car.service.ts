import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car.actions';

@Injectable()
  export class CarService {
    constructor (private http: HttpClient) {}

    url = 'http://localhost:3000/cars';

    getAll() {
      return this.http.get<Car>(this.url);
    }

    getOther() {
      const data = this.http.get('http://plgli2ws01:4000/api/events?PageNumber=1&PageSize=10', {
        withCredentials: true
   });
      data.subscribe(x => console.log(x));
    }
  }
