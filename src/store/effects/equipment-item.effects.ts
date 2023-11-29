import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    catchError,
    exhaustMap,
    map,
    of
} from 'rxjs';
import { StoreActions } from "../actions";
import { FirebaseEquipmentItemService } from '../firebase/equipment-item.firebase-service';
import { Firebase_EquipmentItem, Firebase_EquipmentItem_Create } from '../firebase/models/EquipmentItem';

@Injectable()
export class EquipmentItemStoreEffects {
    constructor(private equipmentItemRepository: FirebaseEquipmentItemService,
        private actions$: Actions) {
    }

    GetAll = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.getEquipmentItems, StoreActions.createEquipmentItemSuccess),
            exhaustMap(() =>
                this.equipmentItemRepository.GetAll().pipe(
                    map((equipmentItems: Firebase_EquipmentItem[]) => StoreActions.getEquipmentItemsSuccess({ equipmentItems })),
                    catchError((error: any) => of(StoreActions.getEquipmentItemsFail({ message: error })))
                )
            )
        )
    );

    Create = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.createEquipmentItem),
            exhaustMap((data: { equipmentItem: Firebase_EquipmentItem_Create }) =>
                this.equipmentItemRepository.Create(data.equipmentItem).pipe(
                    map((equipmentItemId: string) => StoreActions.createEquipmentItemSuccess({ equipmentItemId })),
                    catchError((error: any) => of(StoreActions.createEquipmentItemFail({ message: error })))
                )
            )
        )
    );
}