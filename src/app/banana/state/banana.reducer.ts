import { createReducer, on } from '@ngrx/store';
import { eatBanana, peelBanana, getNewBanana, timeHopComplete } from './banana.actions';
import { initialState, State } from './banana.state';

export const bananaReducer = createReducer(initialState,
        on(getNewBanana, state => ({
            isPeeled: false,
            bitesRemaining: 9,
            color: 'yellow'
        })),
        on(peelBanana, state => ({
            ...state,
            isPeeled: true
        })),
        on(eatBanana, (state, { bites }) => ({
            ...state,
            bitesRemaining: state.bitesRemaining - bites
        })),
        on(timeHopComplete, state => ({
            ...state,
            color: 'brown'
        }))
    );
