import { createAction, union, props } from '@ngrx/store';

export const sources = {
    BUILD_NEW_CAR: '[Car] BuildNew',
    DRIVE: '[Car] Drive',
    REFUEL: '[Car] Refuel'

};

export const buildNewCar = createAction(sources.BUILD_NEW_CAR);
export const driveCar = createAction(sources.DRIVE, props<{distance: number}>());
export const refuelCar = createAction(sources.REFUEL, props<{fuelAmount: number}>());

const actions = union({
    buildNewCar,
    driveCar,
    refuelCar
});

export type ActionUnion = typeof actions;
