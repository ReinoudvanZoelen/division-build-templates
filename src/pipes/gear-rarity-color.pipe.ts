import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';

@Pipe({
  name: 'gearRarityColor'
})
export class GearRarityColorPipe implements PipeTransform {

  transform(rarity: EquipmentRarityType, opacity: number = 1): string {
    switch (rarity) {
      case EquipmentRarityType.Brand:
      case EquipmentRarityType.Named:
        return 'rgba(255,174,0,' + opacity + ')';
      case EquipmentRarityType.Set: return 'rgba(75,175,100,' + opacity + ')';
      case EquipmentRarityType.Exotic: return 'rgba(225,76,50,' + opacity + ')';
    }
  }

}
