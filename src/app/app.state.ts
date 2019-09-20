import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana/state';
import * as carStore from './car/state';
import { State as crossState, initialCrossState } from './crossState/crossState.state';
import { crossReducer } from './crossState/crossState.reducer';

export interface AppState {
    banana: bananaStore.State;
    car: carStore.State;
    crossState: crossState;
}

export const initialState: AppState = {
    banana: bananaStore.initialBananaState,
    car: carStore.initialCarState,
    crossState: initialCrossState
};

export const reducers: ActionReducerMap<AppState> = {
    banana: bananaStore.bananaReducer,
    car: carStore.carReducer,
    crossState: crossReducer
};

export const effects: Array<any> = [
    bananaStore.BananaEffects,
    carStore.CarEffects
];

export const getMyBanana = (s: AppState) => s.banana;
