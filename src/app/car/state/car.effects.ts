import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CarService } from './car.service';
import { sources, loadApiCar, apiCarLoaded, Car, carLoadError } from './car.actions';

@Injectable()
export class CarEffects {

    loadCars$ = createEffect(() => this.actions$.pipe(
        ofType(sources.LOAD_API_CAR),
        mergeMap(() => this.carService.getAll()
            .pipe(
                map((response: Car) => {
                    console.log('effects response', response);
                    return apiCarLoaded({ car: response });
                }),
                catchError((error) => of(carLoadError({errorMsg: error})))
            ))
    ));
    constructor(
        private actions$: Actions,
        private carService: CarService
    ) { }

    // @Effect()
    // public GetCar$ = this.actions$.pipe(
    //     ofType(sources.LOAD_API_CAR),
    //     switchMap(() => {
    //         return this.carService.getAll().pipe(
    //             map((response: Car) => {
    //                 console.log('response from effects', response);
    //                 return apiCarLoaded({ car: response });
    //             }),
    //             catchError((error) => of(carLoadError({errorMsg: error})))
    //         );
    //     }),
    // );
}
