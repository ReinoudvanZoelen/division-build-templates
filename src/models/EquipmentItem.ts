import { EquipmentBrands } from "src/repositories/icon-repository.service";
import { EquipmentRarity } from "./EquipmentRarity";
import { EquipmentSlot } from "./EquipmentSlot";

export class EquipmentItem {
    name: string;
    slot: EquipmentSlot;
    rarity: EquipmentRarity;
    brand: EquipmentBrands;
}