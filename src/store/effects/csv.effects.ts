import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
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

    ExtractCSV_Mask = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.Mask).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));

    ExtractCSV_Backpack = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.Backpack).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));

    ExtractCSV_Vest = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.Vest).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));

    ExtractCSV_Gloves = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.Gloves).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));

    ExtractCSV_Holster = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.Holster).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));


    ExtractCSV_KneePads = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.extractCSV),
            exhaustMap(() => {
                return this.gearData.GetData(EquipmentSlotType.KneePads).pipe(
                    map((equipmentItems: EquipmentItem[]) => StoreActions.extractCSVSuccess({ equipmentItems })));
            })));
}

