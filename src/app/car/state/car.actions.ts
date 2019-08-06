import { createAction, union, props } from '@ngrx/store';

export const sources = {
    BUILD_NEW_CAR: '[Car] BuildNew',
    DRIVE: '[Car] Drive',
    REFUEL: '[Car] Refuel',
    GET_API_CAR: '[Car] GetApiCar',
    API_CAR_LOADED: '[Car] ApiCarLoaded'
};

export const buildNewCar = createAction(sources.BUILD_NEW_CAR);
export const driveCar = createAction(sources.DRIVE, props<{distance: number}>());
export const refuelCar = createAction(sources.REFUEL, props<{fuelAmount: number}>());
export const getApiCar = createAction(sources.GET_API_CAR);
export const apiCarLoaded = createAction(sources.API_CAR_LOADED,
    props<{brand: string; fuel: number; consumption: number; distToGo: number}>());

const actions = union({
    buildNewCar,
    driveCar,
    refuelCar,
    getApiCar,
    apiCarLoaded
});

export type ActionUnion = typeof actions;

export class Car {
    id: number;
    brand: string;
    consumption: number;
    distanceToGo: number;
    fuel: number;
}
