import { createReducer, on } from "@ngrx/store";
import { StoreActions } from "./actions";
import { initialStoreState } from "./state";
import * as _ from 'lodash';

export const storeReducer = createReducer(
    initialStoreState,
    on(StoreActions.getLoadoutsSuccess, (state, action) => ({
        ...state,
        loadouts: action.loadouts
    })),
    // TODO This action below actually pushed Firestore items into the store, which is wrong
    on(StoreActions.getEquipmentItemsSuccess, (state, action) => ({
        ...state,
        equipmentItems: state.equipmentItems.concat(action.equipmentItems)
    })),
    on(StoreActions.extractCSVSuccess, (state, action) => {
        var deepCopy = _.cloneDeep(state);
        state.equipmentItems = action.equipmentItems;
        return deepCopy;
    })
);