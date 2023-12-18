import { Injectable, inject } from '@angular/core';
import { Database, child, onValue, push, ref, update } from '@angular/fire/database';
import { StoreService } from 'src/store/service';
import { Firebase_EquipmentItem, Firebase_EquipmentItem_Create } from './models/EquipmentItem';
import { Firebase_Loadout, Firebase_Loadout_Create } from './models/Loadout';

export const LOADOUTS_TABLE_KEY = 'loadouts';
export const EQUIPMENT_ITEM_TABLE_KEY = 'equipment_items';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private database: Database = inject(Database);
  private loadoutRef = ref(this.database, LOADOUTS_TABLE_KEY);
  private equipmentItemRef = ref(this.database, EQUIPMENT_ITEM_TABLE_KEY);

  constructor(store: StoreService) {
    onValue(this.loadoutRef, (snapshot) => {
      const data = snapshot.val();
      const mappedData = this.firebaseMap<Firebase_Loadout>(data);
      store.firebaseLoadoutsChange(mappedData);
    });

    onValue(this.equipmentItemRef, (snapshot) => {
      const data = snapshot.val();
      const mappedData = this.firebaseMap<Firebase_EquipmentItem>(data);
      store.firebaseEquipmentItemsChange(mappedData);
    });
  }

  public CreateEquipmentItem(equipmentItem: Firebase_EquipmentItem_Create): Promise<void> {
    const newKey = push(child(this.equipmentItemRef, EQUIPMENT_ITEM_TABLE_KEY)).key;

    const updates: any = {
      ['/' + newKey]: equipmentItem
    };

    return update(this.equipmentItemRef, updates);
  }

  public CreateLoadout(loadout: Firebase_Loadout_Create): Promise<void> {
    const newKey = push(child(this.loadoutRef, LOADOUTS_TABLE_KEY)).key;

    const updates: any = {
      ['/' + newKey]: loadout
    };

    return update(this.loadoutRef, updates);
  }

  private firebaseMap<T>(data: any): T[] {
    return data ? Object.keys(data).map(id => {
      return {
        id,
        ...data[id]
      }
    }) : [];
  }
}
