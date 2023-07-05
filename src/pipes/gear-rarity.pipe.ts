import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentRarity } from 'src/models/EquipmentRarity';

@Pipe({
  name: 'gearRarity'
})
export class GearRarityPipe implements PipeTransform {
  transform(items: EquipmentItem[] | null, rarity: EquipmentRarity): EquipmentItem[] | null {
    if (items) {
      return items.filter(x => x.rarity === rarity);
    } else return null
  }
}