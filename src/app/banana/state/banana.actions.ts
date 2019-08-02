import { createAction, union, props } from '@ngrx/store';

export const sources = {
    GET_NEW_BANANA: '[Banana] GetNewBanana',
    PEEL_BANANA: '[Banana] PeelBanana',
    EAT_BANANA: '[Banana] EatBanana',
    INITIATE_TIME_HOP: '[Banana] InitiateTimeHop',
    TIME_HOP_COMPLETE: '[Banana] TimeHopComplete'
};

export const getNewBanana = createAction(sources.GET_NEW_BANANA);
export const peelBanana = createAction(sources.PEEL_BANANA);
export const eatBanana  =  createAction(sources.EAT_BANANA, props<{bites: number}>());
export const initiateTimeHop = createAction(sources.INITIATE_TIME_HOP);
export const timeHopComplete = createAction(sources.TIME_HOP_COMPLETE);

const actions = union({
    getNewBanana,
    peelBanana,
    eatBanana,
    initiateTimeHop,
    timeHopComplete
});

export type ActionsUnion = typeof actions;
