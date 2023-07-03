import { Component, Input } from '@angular/core';
import { GearItem } from 'src/models/GearItem';
import { GearRarity } from 'src/models/GearRarity';
import { ItemAttributeType } from 'src/models/ItemAttributeType';

@Component({
  selector: 'app-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
})
export class GearItemComponent {
  @Input() item: GearItem = {
    rarity: GearRarity.HighEnd,
    attributes: [
      {
        type: ItemAttributeType.Armor_Core,
        value: 15.0
      }, {
        type: ItemAttributeType.Weapon_Damage,
        value: 15.0
      }, {
        type: ItemAttributeType.Skill_Tier,
        value: 15.0
      }, {
        type: ItemAttributeType.Weapon_Damage,
        value: 15.0
      }
    ]
  }
}
