import { Firebase_EquipmentItem } from "src/firebase/models/EquipmentItem";
import { Firebase_Loadout } from "src/firebase/models/Loadout";

export interface IStoreState {
    loadouts: Firebase_Loadout[];
    equipmentItems: Firebase_EquipmentItem[];
}

export const initialStoreState: IStoreState = {
    loadouts: [],
    equipmentItems: [],
}