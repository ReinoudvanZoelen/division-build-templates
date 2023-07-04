import { Component, Input } from '@angular/core';
import { GearItem } from 'src/models/GearItem';
import { GearRarity } from 'src/models/GearRarity';
import { ItemAttributeType } from 'src/models/ItemAttributeType';
import { IconSourceRepository } from '../icon-repository.service';

@Component({
  selector: 'app-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
})
export class GearItemComponent {
  @Input() item: GearItem = {
    rarity: GearRarity.Brand,
    icon: 'badger',
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

  constructor(public iconSourceRepository: IconSourceRepository) {
    switch (Math.floor(Math.random() * (3 - 0 + 1) + 0)) {
      case 0: this.item.rarity = GearRarity.Brand; break;
      case 1: this.item.rarity = GearRarity.Set; break;
      default: this.item.rarity = GearRarity.Exotic; break;
    }
  }
}