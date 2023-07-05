import { Component } from '@angular/core';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentSlot } from 'src/models/EquipmentSlot';

export interface Equipment {
  Mask?: EquipmentItem;
  Backpack?: EquipmentItem;
  Vest?: EquipmentItem;
  Gloves?: EquipmentItem;
  Holster?: EquipmentItem;
  KneePads?: EquipmentItem;
}

@Component({
  selector: 'app-body-gear-items',
  templateUrl: './body-gear-items.component.html',
  styleUrls: ['./body-gear-items.component.scss']
})
export class BodyGearItemsComponent {
  public GearSlot = EquipmentSlot;
  public equipment: Equipment = {};
}
