import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    catchError,
    exhaustMap,
    map,
    of
} from 'rxjs';
import { StoreActions } from "./actions";
import { FirebaseLoadoutService } from './firebase/loadout.firebase-service';
import { Firebase_Loadout, Firebase_Loadout_Create } from './firebase/models/Loadout';

@Injectable()
export class LoadoutStoreEffects {
    constructor(private firebaseService: FirebaseLoadoutService,
        private actions$: Actions) {
    }

    StoreActions_getLoadouts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.getLoadouts, StoreActions.createLoadoutSuccess),
            exhaustMap(() =>
                this.firebaseService.GetAll().pipe(
                    map((loadouts: Firebase_Loadout[]) => StoreActions.getLoadoutsSuccess({ loadouts })),
                    catchError((error: any) => of(StoreActions.getLoadoutsFail({ message: error })))
                )
            )
        )
    );

    StoreActions_createLoadout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.createLoadout),
            exhaustMap((data: { loadout: Firebase_Loadout_Create }) =>
                this.firebaseService.Create(data.loadout).pipe(
                    map((loadoutId: string) => StoreActions.createLoadoutSuccess({ loadoutId })),
                    catchError((error: any) => of(StoreActions.createLoadoutFail({ message: error })))
                )
            )
        )
    );
}