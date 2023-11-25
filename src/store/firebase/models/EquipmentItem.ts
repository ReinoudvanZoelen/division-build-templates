import { EquipmentBrandType } from "src/models/EquipmentBrand";
import { EquipmentRarityType } from "src/models/EquipmentRarity";
import { EquipmentSlotType } from "src/models/EquipmentSlot";
import { CoreItemAttributeType, ItemAttributeType } from "src/models/ItemAttributeType";

export class Firebase_EquipmentItem_Create {
    name: string;
    slot: EquipmentSlotType;
    rarity: EquipmentRarityType;
    brand: EquipmentBrandType;
    coreAttribute: CoreItemAttributeType;
    attributes: ItemAttributeType[];
    constructor(equipmentItem: EquipmentItem_Create) {
        this.name = equipmentItem.name;
        this.slot = equipmentItem.slot;
        this.rarity = equipmentItem.rarity;
        this.brand = equipmentItem.brand;
        this.coreAttribute = equipmentItem.coreAttribute;
        this.attributes = equipmentItem.attributes;
    }
}

export class Firebase_EquipmentItem extends Firebase_EquipmentItem_Create {
    id: string;

    constructor(equipmentItem: EquipmentItem) {
        super(equipmentItem);
        this.id = equipmentItem.id;
    }
}
