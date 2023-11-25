import { Component, OnInit } from '@angular/core';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { CoreItemAttributeType } from 'src/models/ItemAttributeType';
import { Loadout_Create } from 'src/store/models/Loadout';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'division-builds';

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.store.loadouts$.subscribe(x => {
      console.log('loadouts$ returned with', x);
    })

    this.store.dispatchGetLoadouts();
  }

  protected CreateLoadout(): void {
    var model: Loadout_Create = {
      Mask: { id: '1', name: 'name', slot: EquipmentSlotType.Mask, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
      Backpack: { id: '2', name: 'name', slot: EquipmentSlotType.Backpack, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
      Vest: { id: '3', name: 'name', slot: EquipmentSlotType.Vest, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
      Gloves: { id: '4', name: 'name', slot: EquipmentSlotType.Gloves, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
      Holster: { id: '5', name: 'name', slot: EquipmentSlotType.Holster, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
      KneePads: { id: '6', name: 'name', slot: EquipmentSlotType.KneePads, rarity: EquipmentRarityType.Set, coreAttribute: CoreItemAttributeType.Weapon_Damage, attributes: [], brand: '511' },
    };

    this.store.saveLoadout(model);
  }
}
