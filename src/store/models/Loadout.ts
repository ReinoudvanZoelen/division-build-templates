import { EquipmentItem } from "./EquipmentItem";

export class Loadout_Create {
    Mask?: EquipmentItem;
    Backpack?: EquipmentItem;
    Chest?: EquipmentItem;
    Gloves?: EquipmentItem;
    Holster?: EquipmentItem;
    KneePads?: EquipmentItem;
}

export class Loadout extends Loadout_Create {
    id: string;
}
