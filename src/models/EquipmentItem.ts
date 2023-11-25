import { EquipmentBrandType } from "./EquipmentBrand";
import { EquipmentRarityType } from "./EquipmentRarity";
import { EquipmentSlotType } from "./EquipmentSlot";

export class EquipmentItem {
    name: string;
    slot: EquipmentSlotType;
    rarity: EquipmentRarityType;
    brand: EquipmentBrandType;
}