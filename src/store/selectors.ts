import { createSelector } from "@ngrx/store";
import { Loadout } from "./models/Loadout";
import { IStoreState } from "./state";

export const selectStore = (state: IStoreState) => state;

export const loadouts$ = createSelector(
    selectStore,
    (state: IStoreState): Loadout[] => state.loadouts
);
export const equipmentItems$ = createSelector(
    selectStore,
    (state: IStoreState): Loadout[] => state.equipmentItems
);