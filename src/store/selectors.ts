import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Firebase_EquipmentItem } from "src/firebase/models/EquipmentItem";
import { Firebase_Loadout } from "src/firebase/models/Loadout";
import { IStoreState } from "./state";

export const selectDivisionState =
    createFeatureSelector<IStoreState>('division');

export const loadouts$ = createSelector(
    selectDivisionState,
    (state: IStoreState): Firebase_Loadout[] => state.loadouts ?? []
);
export const equipmentItems$ = createSelector(
    selectDivisionState,
    (state: IStoreState): Firebase_EquipmentItem[] => state.equipmentItems ?? []
);