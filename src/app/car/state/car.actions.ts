import { createAction, union, props } from '@ngrx/store';


export const sources = {
    BUILD_NEW_CAR: '[Car] BuildNew',
    DRIVE: '[Car] Drive',
    REFUEL: '[Car] Refuel',
    LOAD_API_CAR: '[Car] LoadApiCar',
    API_CAR_LOADED: '[Car] ApiCarLoaded',
    CAR_LOAD_ERROR: '[Car] CarLoadError'
};

export const buildNewCar = createAction(sources.BUILD_NEW_CAR);
export const driveCar = createAction(sources.DRIVE, props<{distance: number}>());
export const refuelCar = createAction(sources.REFUEL, props<{fuelAmount: number}>());
export const loadApiCar = createAction(sources.LOAD_API_CAR);
export const apiCarLoaded = createAction(sources.API_CAR_LOADED,
    props<{car: Car}>());
export const carLoadError = createAction(sources.CAR_LOAD_ERROR, props<{errorMsg: ErrorMsg}>());

const actions = union({
    buildNewCar,
    driveCar,
    refuelCar,
    loadApiCar,
    apiCarLoaded
});

export type ActionUnion = typeof actions;

export class Car {
    id: number;
    brand: string;
    consumption: number;
    distanceToGo: number;
    fuel: number;
    errorMsg: string;
}

export class ErrorMsg {
    name: string;
    message: string;
    url: string;
}
