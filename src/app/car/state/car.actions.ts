import { createAction, union, props } from '@ngrx/store';

export const sources = {
    BUILD_NEW_CAR: '[Car] BuildNew',
    DRIVE: '[Car] Drive',
    REFUEL: '[Car] Refuel'

};

//const buildNewCar = createAction