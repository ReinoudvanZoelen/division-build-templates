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

  // constructor(private buildService: BuildRepositoryService) { }

  // public saveTemplate() {
  //   this.buildService.Add(this.equipment).subscribe(x => {
  //     console.log('Saved the template with id', x);

  //     this.buildService.Get(x.name).subscribe(x => {
  //       console.log('Fetched it and got', x);
  //     })
  //   });
  // }
}