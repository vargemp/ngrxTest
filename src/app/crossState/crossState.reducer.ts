import { createReducer, on } from '@ngrx/store';
import { initialCrossState, State } from './crossState.state';
import { assignText } from './crossState.actions';

export const crossReducer = createReducer(initialCrossState,
    on(assignText, (state, { text }) => ({
        passableText: text
    }))
);
