import { Pipe, PipeTransform } from '@angular/core';
import { EquipmentRarity } from 'src/models/EquipmentRarity';

@Pipe({
  name: 'gearRarityColor'
})
export class GearRarityColorPipe implements PipeTransform {

  transform(rarity: EquipmentRarity, opacity: number = 1): unknown {
    switch (rarity) {
      case EquipmentRarity.Brand: return 'rgba(255,174,0,' + opacity + ')';
      case EquipmentRarity.Set: return 'rgba(75,175,100,' + opacity + ')';
      case EquipmentRarity.Exotic: return 'rgba(225,76,50,' + opacity + ')';
    }
  }

}
