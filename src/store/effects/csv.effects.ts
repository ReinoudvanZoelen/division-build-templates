import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    exhaustMap,
    map
} from 'rxjs';
import { StoreActions } from "../actions";
import { GearDataService } from '../csv/gear-data.service';
import { EquipmentItem } from '../models/EquipmentItem';

@Injectable({
    providedIn: 'root'
})
export class CSVEffects {
    constructor(private gearData: GearDataService,
        private actions$: Actions) {
    }

    GetAll = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() =>
                this.gearData.GetAllData().pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })))
            )
        )
    );
}

