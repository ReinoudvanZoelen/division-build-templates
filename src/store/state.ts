import { EquipmentItem } from "./models/EquipmentItem";
import { Loadout } from "./models/Loadout";

export const StoreFeatureKey = 'division';

export interface IRootState {
    division: IStoreState;
}

export interface IStoreState {
    loadouts: Loadout[];
    equipmentItems: EquipmentItem[];
}

export const initialStoreState: IRootState = {
    division: {
        loadouts: [],
        equipmentItems: [],
    }
}