import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    catchError,
    exhaustMap,
    map,
    of
} from 'rxjs';
import { StoreActions } from "../actions";
import { FirebaseLoadoutService } from '../firebase/loadout.firebase-service';
import { Firebase_Loadout, Firebase_Loadout_Create } from '../firebase/models/Loadout';

@Injectable()
export class LoadoutStoreEffects {
    constructor(private loadoutRepository: FirebaseLoadoutService,
        private actions$: Actions) {
    }

    GetAll = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.getLoadouts),
            exhaustMap(() =>
                this.loadoutRepository.GetAll().pipe(
                    map((loadouts: Firebase_Loadout[]) => StoreActions.getLoadoutsSuccess({ loadouts })),
                    catchError((error: any) => of(StoreActions.getLoadoutsFail({ message: error })))
                )
            )
        )
    );

    Create = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.createLoadout),
            exhaustMap((data: { loadout: Firebase_Loadout_Create }) =>
                this.loadoutRepository.Create(data.loadout).pipe(
                    map((loadoutId: string) => {
                        var loadout: Firebase_Loadout = { ...data.loadout, id: loadoutId };
                        return StoreActions.createLoadoutSuccess({ loadout })
                    }),
                    catchError((error: any) => of(StoreActions.createLoadoutFail({ message: error })))
                )
            )
        )
    );
}

