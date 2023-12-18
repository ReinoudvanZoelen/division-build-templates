import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/firebase/firebase.service';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'division-builds';

  constructor(private store: StoreService, private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.store.dispatchGetLoadouts();
    this.store.dispatchExtractCSV();

    this.store.equipmentItemsForSlot$(EquipmentSlotType.Mask).subscribe(items => {
      if (items.length > 0) {
        // this.firebase.CreateEquipmentItem(new Firebase_EquipmentItem_Create(items[0]));
      }
    })
  }
}
