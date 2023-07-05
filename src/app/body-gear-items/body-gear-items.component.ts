import { Component } from '@angular/core';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentRarity } from 'src/models/EquipmentRarity';
import { EquipmentSlot } from 'src/models/EquipmentSlot';
import { BackpackDataService } from 'src/repositories/GearDataService';

export interface Equipment {
  Mask: EquipmentItem;
  Backpack: EquipmentItem;
  Vest: EquipmentItem;
  Gloves: EquipmentItem;
  Holster: EquipmentItem;
  KneePads: EquipmentItem;
}

@Component({
  selector: 'app-body-gear-items',
  templateUrl: './body-gear-items.component.html',
  styleUrls: ['./body-gear-items.component.scss']
})
export class BodyGearItemsComponent {
  public GearSlot = EquipmentSlot;
  public equipment: Equipment = {
    Mask: {
      name: 'Foo',
      slot: EquipmentSlot.Mask,
      rarity: EquipmentRarity.Brand,
      brand: 'badger'
    },
    Backpack: {
      name: 'Foo',
      slot: EquipmentSlot.Backpack,
      rarity: EquipmentRarity.Brand,
      brand: 'badger'
    },
    Vest: {
      name: 'Foo',
      slot: EquipmentSlot.Vest,
      rarity: EquipmentRarity.Set,
      brand: 'aces'
    },
    Gloves: {
      name: 'Foo',
      slot: EquipmentSlot.Gloves,
      rarity: EquipmentRarity.Exotic,
      brand: 'exotic'
    },
    Holster: {
      name: 'Foo',
      slot: EquipmentSlot.Holster,
      rarity: EquipmentRarity.Set,
      brand: 'aces'
    },
    KneePads: {
      name: 'Foo',
      slot: EquipmentSlot.KneePads,
      rarity: EquipmentRarity.Brand,
      brand: 'badger'
    }
  };
}
