import { EquipmentItem } from "./EquipmentItem";

export interface ILoadout_Create {
    Mask?: EquipmentItem;
    Backpack?: EquipmentItem;
    Chest?: EquipmentItem;
    Gloves?: EquipmentItem;
    Holster?: EquipmentItem;
    KneePads?: EquipmentItem;
}

export class Loadout_Create implements ILoadout_Create {
    Mask?: EquipmentItem;
    Backpack?: EquipmentItem;
    Chest?: EquipmentItem;
    Gloves?: EquipmentItem;
    Holster?: EquipmentItem;
    KneePads?: EquipmentItem;


    constructor(data?: ILoadout_Create) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}

export interface ILoadout extends ILoadout_Create {
    id: string;
}

export class Loadout extends Loadout_Create implements ILoadout {
    id: string;

    constructor(data?: ILoadout) {
        super(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
