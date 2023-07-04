import { brandIcons } from "src/repositories/icon-repository.service";
import { GearRarity } from "./GearRarity";
import { ItemAttribute } from "./ItemAttribute";

export class GearItem {
    rarity: GearRarity;
    icon: brandIcons;
    attributes: ItemAttribute[];
}