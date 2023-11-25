import { createReducer, on } from "@ngrx/store";
import { StoreActions } from "./actions";
import { initialStoreState } from "./state";



export const storeReducer = createReducer(
    initialStoreState,
    on(StoreActions.getLoadoutsSuccess, (state, action) => ({
        ...state,
        loadouts: action.loadouts
    })),
    on(StoreActions.createLoadoutSuccess, (state, action) => {
        console.log('StoreActions.createLoadoutSuccess', { state, action });
        var newState = { ...state };
        console.log(newState);
        return newState;
    })
)