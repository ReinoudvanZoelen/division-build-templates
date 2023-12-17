import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EquipmentItem } from "./models/EquipmentItem";
import { Loadout } from "./models/Loadout";
import { IRootState, IStoreState, StoreFeatureKey } from "./state";

export const selectStore = createFeatureSelector<IRootState, IStoreState>(StoreFeatureKey);

export const loadouts$ = createSelector(
    selectStore,
    (state: IStoreState): Loadout[] => state.loadouts
);
export const equipmentItems$ = createSelector(
    selectStore,
    (state: IStoreState): EquipmentItem[] => state.equipmentItems
);