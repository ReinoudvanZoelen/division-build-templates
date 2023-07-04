import { Component } from '@angular/core';
import { GearSlot } from 'src/models/GearSlot';

@Component({
  selector: 'app-body-gear-items',
  templateUrl: './body-gear-items.component.html',
  styleUrls: ['./body-gear-items.component.scss']
})
export class BodyGearItemsComponent {
  public GearSlot = GearSlot;
  public slots: GearSlot[] = [
    GearSlot.Mask,
    GearSlot.Backpack,
    GearSlot.Vest,
    GearSlot.Gloves,
    GearSlot.Holster,
    GearSlot.KneePads
  ]
}
