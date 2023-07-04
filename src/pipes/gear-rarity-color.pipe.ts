import { Pipe, PipeTransform } from '@angular/core';
import { GearRarity } from 'src/models/GearRarity';

@Pipe({
  name: 'gearRarityColor'
})
export class GearRarityColorPipe implements PipeTransform {

  transform(rarity: GearRarity, opacity: number = 1): unknown {
    switch (rarity) {
      case GearRarity.Brand: return 'rgba(255,174,0,' + opacity + ')';
      case GearRarity.Set: return 'rgba(75,175,100,' + opacity + ')';
      case GearRarity.Exotic: return 'rgba(225,76,50,' + opacity + ')';
    }
  }

}
