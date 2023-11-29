import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentItem } from 'src/store/models/EquipmentItem';

@Pipe({
  name: 'gearRarity'
})
export class GearRarityPipe implements PipeTransform {
  transform(items: EquipmentItem[] | null, rarity: EquipmentRarityType): EquipmentItem[] | null {
    if (items) {
      return items.filter(x => x.rarity === rarity);
    } else return null
  }
}