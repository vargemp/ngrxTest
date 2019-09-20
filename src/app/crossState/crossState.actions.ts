import { createAction, union, props } from '@ngrx/store';

export const sources = {
    ASSIGN_TEXT: '[CrossState] AssignText'
};

export const assignText = createAction(sources.ASSIGN_TEXT, props<{text: string}>());
