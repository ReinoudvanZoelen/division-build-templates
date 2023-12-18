import { Component } from '@angular/core';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { Loadout_Create } from 'src/store/models/Loadout';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-body-gear-items',
  templateUrl: './body-gear-items.component.html',
  styleUrls: ['./body-gear-items.component.scss']
})
export class BodyGearItemsComponent {
  public GearSlot = EquipmentSlotType;
  public loadout = new Loadout_Create();

  constructor(private store: StoreService) { }

  public SaveLoadout() {
    console.log('Saving', this.loadout);
    this.store.saveLoadout(this.loadout);
  }
}