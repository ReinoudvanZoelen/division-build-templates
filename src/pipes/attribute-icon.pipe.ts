import { Pipe, PipeTransform } from '@angular/core';
import { CoreItemAttributeType, ItemAttributeType, SecondaryItemAttributeType } from 'src/models/ItemAttributeType';

@Pipe({
  name: 'attributeIcon'
})
export class AttributeIconPipe implements PipeTransform {

  transform(value: ItemAttributeType): string {
    switch (value) {
      case CoreItemAttributeType.Armor_Core:
        return 'defensive';
      case CoreItemAttributeType.Weapon_Damage:
        return 'offensive';
      case CoreItemAttributeType.Skill_Tier:
        return 'utility';

      case SecondaryItemAttributeType.Armor_Regen:
      case SecondaryItemAttributeType.Armor_On_Kill:
      case SecondaryItemAttributeType.Health:
      case SecondaryItemAttributeType.Hazard_Protection:
        return 'defensive';

      case SecondaryItemAttributeType.Critical_Hit_Chance:
      case SecondaryItemAttributeType.Critical_Hit_Damage:
      case SecondaryItemAttributeType.Headshot_Damage:
      case SecondaryItemAttributeType.Weapon_Handling:
        return 'offensive';

      case SecondaryItemAttributeType.Incoming_Repairs:
      case SecondaryItemAttributeType.Repair_Skills:
      case SecondaryItemAttributeType.Skill_Damage:
      case SecondaryItemAttributeType.Status_Effects:
      case SecondaryItemAttributeType.Skill_Haste:
        return 'utility';

      default:
        return 'unknown'
    }
  }

}
