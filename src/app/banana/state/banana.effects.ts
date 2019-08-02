import { Injectable } from '@angular/core';
import { RotService } from '../../rot.service';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { sources } from './banana.actions';

@Injectable()
export class BananaEffects {

  initiateTimeHop$ = createEffect(() => this.actions$.pipe(
    ofType(sources.INITIATE_TIME_HOP),
    mergeMap(() => this.rotService.rotBanana()
      .pipe(
        map(color => ({ type: sources.TIME_HOP_COMPLETE, payload: color })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private rotService: RotService
  ) {}
}
