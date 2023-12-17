import { Component } from '@angular/core';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { Loadout } from 'src/store/models/Loadout';

@Component({
  selector: 'app-body-gear-items',
  templateUrl: './body-gear-items.component.html',
  styleUrls: ['./body-gear-items.component.scss']
})
export class BodyGearItemsComponent {
  public GearSlot = EquipmentSlotType;
  public equipment: Loadout = { id: '' };
}