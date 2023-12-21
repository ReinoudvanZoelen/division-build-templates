import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/firebase/firebase.service';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-edit-loadout',
  templateUrl: './edit-loadout.component.html',
  styleUrl: './edit-loadout.component.scss'
})
export class EditLoadoutComponent {
  public GearSlot = EquipmentSlotType;
  public loadout$ = this.store.getLoadout(this.route.snapshot.params['id']);

  constructor(private store: StoreService, private firebase: FirebaseService, private route: ActivatedRoute) { }
}
