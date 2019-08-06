import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana/state';
import * as carStore from './car/state';

export interface AppState {
    banana: bananaStore.State;
    car: carStore.State;
}

export const initialState: AppState = {
    banana: bananaStore.initialBananaState,
    car: carStore.initialCarState
};

export const reducers: ActionReducerMap<AppState> = {
    banana: bananaStore.bananaReducer,
    car: carStore.carReducer
};

export const effects: Array<any> = [
    bananaStore.BananaEffects
];

export const getMyBanana = (s: AppState) => s.banana;
