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
}

export class Firebase_EquipmentItem extends Firebase_EquipmentItem_Create {
    id: string;
}
