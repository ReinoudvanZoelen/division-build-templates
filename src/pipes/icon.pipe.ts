import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { Icons } from 'src/models/Icons';
import { CoreGearAttributes, GearAttributes, SecondaryGearAttributes } from 'src/models/GearAttributes';

@Pipe({
    name: 'icon'
})
export class IconPipe implements PipeTransform {

    transform(item: EquipmentSlotType | GearAttributes): Icons {
        if (item in EquipmentSlotType) {
            switch (item) {
                case EquipmentSlotType.Mask: return "mask";
                case EquipmentSlotType.Backpack: return "backpack";
                case EquipmentSlotType.Chest: return "chest";
                case EquipmentSlotType.Gloves: return "gloves";
                case EquipmentSlotType.Holster: return "holster";
                case EquipmentSlotType.KneePads: return "kneepads";
            }
        } else if (item in CoreGearAttributes) {
            switch (item) {
                case CoreGearAttributes.Armor: return "defense1";
                case CoreGearAttributes.Weapon_Damage: return "offense1";
                case CoreGearAttributes.Skill_Tier: return "tech1";
                case CoreGearAttributes.Not_Applicable: return "blank_attribute";
            }
        } else if (item in SecondaryGearAttributes) {
            switch (item) {
                case SecondaryGearAttributes.Critical_Hit_Chance:
                case SecondaryGearAttributes.Critical_Hit_Damage:
                case SecondaryGearAttributes.Headshot_Damage:
                case SecondaryGearAttributes.Weapon_Handling:
                    return "offense1";

                case SecondaryGearAttributes.Armor_Regeneration:
                case SecondaryGearAttributes.Explosive_Resistance:
                case SecondaryGearAttributes.Hazard_Protection:
                case SecondaryGearAttributes.Health:
                    return "defense1";

                case SecondaryGearAttributes.Skill_Damage:
                case SecondaryGearAttributes.Skill_Haste:
                case SecondaryGearAttributes.Skill_Repair:
                case SecondaryGearAttributes.Status_Effects:
                    return "tech1";
            }
        }

        return "blank_attribute";
    }

}
