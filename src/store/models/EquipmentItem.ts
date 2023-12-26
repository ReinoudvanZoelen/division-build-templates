import { Firebase_EquipmentItem, Firebase_EquipmentItem_Create } from "src/firebase/models/EquipmentItem";
import { EquipmentRarityType } from "src/models/EquipmentRarity";
import { EquipmentSlotType } from "src/models/EquipmentSlot";
import { BrandIcons } from "src/models/Icons";
import { CoreGearAttributes, SecondaryGearAttributes } from "src/models/GearAttributes";

export class EquipmentItem_Create {
    name: string;
    slot: EquipmentSlotType;
    rarity: EquipmentRarityType;
    brand: BrandIcons;
    coreAttribute: CoreGearAttributes;
    attributes: SecondaryGearAttributes[];

    constructor(item: Firebase_EquipmentItem_Create) {
        this.name = item.name;
        this.slot = item.slot;
        this.rarity = item.rarity;
        this.brand = item.brand;
        this.coreAttribute = item.coreAttribute;
        this.attributes = item.attributes;
    }
}

export class EquipmentItem extends EquipmentItem_Create {
    id: string;

    constructor(item: Firebase_EquipmentItem) {
        super(item);
        this.id = item.id;
    }
}