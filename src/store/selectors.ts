import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentItem } from "./models/EquipmentItem";
import { Loadout } from "./models/Loadout";
import { IStoreState } from "./state";

export const selectDivisionState =
    createFeatureSelector<IStoreState>('division');

export const loadouts$ = createSelector(
    selectDivisionState,
    (state: IStoreState): Loadout[] => state.loadouts ?? []
);
export const equipmentItems$ = createSelector(
    selectDivisionState,
    (state: IStoreState): EquipmentItem[] => state.equipmentItems ?? []
);