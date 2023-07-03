import { Pipe, PipeTransform } from '@angular/core';
import { GearRarity } from 'src/models/GearRarity';

@Pipe({
  name: 'gearRarityColor'
})
export class GearRarityColorPipe implements PipeTransform {

  transform(rarity: GearRarity): unknown {
    switch (rarity) {
      case GearRarity.Worn: return 'white';
      case GearRarity.Standard: return 'green';
      case GearRarity.Specialized: return 'blue';
      case GearRarity.Superior: return 'purple';
      case GearRarity.HighEnd: return 'orange';
      case GearRarity.Exotic: return 'red';
    }
  }

}
