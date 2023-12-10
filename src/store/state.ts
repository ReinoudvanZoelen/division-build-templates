import { EquipmentItem } from "./models/EquipmentItem";
import { Loadout } from "./models/Loadout";

export const StoreFeatureKey = 'store';

export interface IStoreState {
    loadouts: Loadout[];
    equipmentItems: EquipmentItem[];
}

export const initialStoreState: IStoreState = {
    loadouts: [],
    equipmentItems: [],
}