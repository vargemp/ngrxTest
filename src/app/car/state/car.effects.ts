import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CarService } from './car.service';
import { sources, getApiCar, apiCarLoaded, Car } from './car.actions';

@Injectable()
export class CarEffects {

    loadCars$ = createEffect(() => this.actions$.pipe(
        ofType(sources.GET_API_CAR),
        mergeMap(() => this.carService.getAll()
        .pipe(
            map((response: Car) => {
       console.log(response);
       return apiCarLoaded({brand: response.brand, fuel: response.fuel,
            consumption: response.consumption, distToGo: response.distanceToGo});
         }),
            catchError(() => EMPTY)
        ))
    ));
    constructor(
        private actions$: Actions,
        private carService: CarService
    ) { }

    // @Effect()
    // public GetCar$ = this.actions$.pipe(
    //     ofType(sources.GET_API_CAR),
    //     switchMap(() => {
    //         return this.carService.getAll().pipe(
    //             map((response: Car) => {
    //                 console.log(response);
    //                 return apiCarLoaded({brand: response.brand, fuel: response.fuel, consumption: response.consumption});
    //             })
    //         );
    //     }),
    // );
}
