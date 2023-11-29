import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreFirebaseService } from './core.firebase-service';
import { Firebase_EquipmentItem, Firebase_EquipmentItem_Create } from './models/EquipmentItem';

@Injectable({ providedIn: 'root' })
export class FirebaseEquipmentItemService extends CoreFirebaseService<Firebase_EquipmentItem, Firebase_EquipmentItem_Create> {
  constructor(http: HttpClient) {
    super(http, 'EquipmentItem');
  }
}