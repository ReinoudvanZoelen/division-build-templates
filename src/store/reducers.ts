import { createReducer, on } from "@ngrx/store";
import * as _ from "lodash";
import { StoreActions } from "./actions";
import { initialStoreState } from "./state";
import { EquipmentItem } from "./models/EquipmentItem";

export const storeReducer = createReducer(
    initialStoreState,
    on(StoreActions.getLoadoutsSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.loadouts = action.loadouts;
        return deepCopy;
    }),
    on(StoreActions.getEquipmentItemsSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.equipmentItems = deepCopy.equipmentItems.concat(action.equipmentItems.map(item => new EquipmentItem(item)))
        return deepCopy;
    }),
    on(StoreActions.extractCSVSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.equipmentItems = deepCopy.equipmentItems.concat(action.equipmentItems)
        return deepCopy;
    }),
    on(StoreActions.createLoadoutSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        deepCopy.loadouts.push(action.loadout);
        return deepCopy;
    })
);