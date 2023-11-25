import { EquipmentItem } from "./EquipmentItem";

export class Loadout_Create {
    Mask?: EquipmentItem;
    Backpack?: EquipmentItem;
    Vest?: EquipmentItem;
    Gloves?: EquipmentItem;
    Holster?: EquipmentItem;
    KneePads?: EquipmentItem;
}

export class Loadout extends Loadout_Create {
    id: string;
}
