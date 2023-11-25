import { createReducer, on } from "@ngrx/store";
import { StoreActions } from "./actions";
import { initialStoreState } from "./state";

export const storeReducer = createReducer(
    initialStoreState,
    on(StoreActions.getLoadoutsSuccess, (state, action) => ({
        ...state,
        loadouts: action.loadouts
    })),
    on(StoreActions.getEquipmentItemsSuccess, (state, action) => ({
        ...state,
        equipmentItems: action.equipmentItems
    }))
)