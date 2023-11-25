import { EquipmentItem } from "./EquipmentItem";

export interface Loadout {
    Mask?: EquipmentItem;
    Backpack?: EquipmentItem;
    Vest?: EquipmentItem;
    Gloves?: EquipmentItem;
    Holster?: EquipmentItem;
    KneePads?: EquipmentItem;
}