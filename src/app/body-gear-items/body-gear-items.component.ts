import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/firebase/firebase.service';
import { Firebase_Loadout_Create } from 'src/firebase/models/Loadout';
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

  constructor(private store: StoreService, private firebase: FirebaseService, private router: Router) { }

  public SaveLoadout() {
    console.log('Saving', this.loadout);
    this.store.saveLoadout(this.loadout);
    var model: Firebase_Loadout_Create = {
      MaskId: this.loadout.Mask?.id,
      BackpackId: this.loadout.Backpack?.id,
      ChestId: this.loadout.Chest?.id,
      GlovesId: this.loadout.Gloves?.id,
      HolsterId: this.loadout.Holster?.id,
      KneePadsId: this.loadout.KneePads?.id,
    }
    this.firebase.CreateLoadout(model);
    this.router.navigate([['/']])
  }
}