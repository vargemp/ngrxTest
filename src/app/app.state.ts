import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from './banana/state';

export interface AppState {
    banana: bananaStore.State;
}

export const initialState: AppState = {
    banana: bananaStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
    banana: bananaStore.bananaReducer
};

export const effects: Array<any> = [
    bananaStore.BananaEffects
];

export const getMyBanana = (s: AppState) => s.banana;
