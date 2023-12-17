import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { Icons } from 'src/models/Icons';
import { CoreItemAttributeType, ItemAttributeType, SecondaryItemAttributeType } from 'src/models/ItemAttributeType';

@Pipe({
    name: 'icon'
})
export class IconPipe implements PipeTransform {

    transform(item: EquipmentSlotType | ItemAttributeType): Icons {
        if (item in EquipmentSlotType) {
            switch (item) {
                case EquipmentSlotType.Mask: return "mask";
                case EquipmentSlotType.Backpack: return "backpack";
                case EquipmentSlotType.Chest: return "chest";
                case EquipmentSlotType.Gloves: return "gloves";
                case EquipmentSlotType.Holster: return "holster";
                case EquipmentSlotType.KneePads: return "kneepads";
            }
        } else if (item in CoreItemAttributeType) {
            switch (item) {
                case CoreItemAttributeType.Armor_Core: return "defense1";
                case CoreItemAttributeType.Weapon_Damage: return "offense1";
                case CoreItemAttributeType.Skill_Tier: return "tech1";
                case CoreItemAttributeType.Not_Applicable: return "blank_attribute";
            }
        } else if (item in SecondaryItemAttributeType) {
            switch (item) {
                case SecondaryItemAttributeType.Armor_Regen:
                case SecondaryItemAttributeType.Armor_On_Kill:
                case SecondaryItemAttributeType.Health:
                case SecondaryItemAttributeType.Hazard_Protection:
                    return "defense1";

                case SecondaryItemAttributeType.Critical_Hit_Chance:
                case SecondaryItemAttributeType.Critical_Hit_Damage:
                case SecondaryItemAttributeType.Headshot_Damage:
                case SecondaryItemAttributeType.Weapon_Handling:
                    return "offense1";

                case SecondaryItemAttributeType.Incoming_Repairs:
                case SecondaryItemAttributeType.Repair_Skills:
                case SecondaryItemAttributeType.Skill_Damage:
                case SecondaryItemAttributeType.Status_Effects:
                case SecondaryItemAttributeType.Skill_Haste:
                    return "tech1";
            }
        }

        return "blank_attribute";
    }

}
