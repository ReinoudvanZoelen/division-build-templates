import { createSelector } from "@ngrx/store";
import { IStoreState } from "./state";
import { Loadout } from "src/models/Loadout";

export const selectStore = (state: IStoreState) => state;

export const loadouts$ = createSelector(
    selectStore,
    (state: IStoreState): Loadout[] => state.loadouts
);