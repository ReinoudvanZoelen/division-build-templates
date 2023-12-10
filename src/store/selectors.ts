import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Loadout } from "./models/Loadout";
import { IStoreState, StoreFeatureKey } from "./state";

const selector = createFeatureSelector<IStoreState>(StoreFeatureKey);

export const loadouts$ = createSelector(
    selector,
    (state: IStoreState): Loadout[] => state.loadouts
);
export const equipmentItems$ = createSelector(
    selector,
    (state: IStoreState): Loadout[] => state.equipmentItems
);