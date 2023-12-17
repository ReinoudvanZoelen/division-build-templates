import { createReducer, on } from "@ngrx/store";
import * as _ from "lodash";
import { StoreActions } from "./actions";
import { initialStoreState } from "./state";

export const storeReducer = createReducer(
    initialStoreState,
    on(StoreActions.getLoadoutsSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.division.loadouts = action.loadouts;
        return deepCopy;
    }),
    on(StoreActions.getEquipmentItemsSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.division.equipmentItems = deepCopy.division.equipmentItems.concat(action.equipmentItems)
        return deepCopy;
    }),
    on(StoreActions.extractCSVSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.division.equipmentItems = deepCopy.division.equipmentItems.concat(action.equipmentItems)
        return deepCopy;
    })
);