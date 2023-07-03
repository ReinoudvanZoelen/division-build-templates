import { Pipe, PipeTransform } from '@angular/core';
import { ItemAttributeType } from 'src/models/ItemAttributeType';

@Pipe({
  name: 'attributeIcon'
})
export class AttributeIconPipe implements PipeTransform {

  transform(value: ItemAttributeType): string {
    switch (value) {
      case ItemAttributeType.Armor_Core:
        return 'defensive';
      case ItemAttributeType.Weapon_Damage:
        return 'offensive';
      case ItemAttributeType.Skill_Tier:
        return 'utility';

      case ItemAttributeType.Armor_Regen:
      case ItemAttributeType.Armor_On_Kill:
      case ItemAttributeType.Health:
      case ItemAttributeType.Hazard_Protection:
        return 'defensive';

      case ItemAttributeType.Critical_Hit_Chance:
      case ItemAttributeType.Critical_Hit_Damage:
      case ItemAttributeType.Headshot_Damage:
      case ItemAttributeType.Weapon_Handling:
        return 'offensive';

      case ItemAttributeType.Incoming_Repairs:
      case ItemAttributeType.Repair_Skills:
      case ItemAttributeType.Skill_Damage:
      case ItemAttributeType.Status_Effects:
      case ItemAttributeType.Skill_Haste:
        return 'utility';
    }
  }

}
