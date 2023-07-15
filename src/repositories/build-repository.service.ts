import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from 'src/app/body-gear-items/body-gear-items.component';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { FirebaseDataService } from './firebase-data.service';
import { EquipmentItemStorageModel, EquipmentStorageModel } from './firebase-models';

@Injectable({
  providedIn: 'root'
})
export class BuildRepositoryService {
  subject: string = EquipmentStorageModel.name;

  constructor(private dataSource: FirebaseDataService<EquipmentStorageModel>) {
    dataSource.subject = this.subject;
  }

  public Get(key: string): Observable<EquipmentStorageModel> {
    return this.dataSource.GetById(key);
  }

  public Add(data: Equipment): Observable<any> {
    return this.dataSource.Create(this.mapEquipment(data));
  }

  private mapEquipment(data: Equipment): EquipmentStorageModel {
    return {
      MaskSlot: this.mapItem(data.Mask as EquipmentItem),
      BackpackSlot: this.mapItem(data.Backpack as EquipmentItem),
      VestSlot: this.mapItem(data.Vest as EquipmentItem),
      GlovesSlot: this.mapItem(data.Gloves as EquipmentItem),
      HolsterSlot: this.mapItem(data.Holster as EquipmentItem),
      KneePadsSlot: this.mapItem(data.KneePads as EquipmentItem)
    }
  }

  private mapItem(data: EquipmentItem): EquipmentItemStorageModel {
    return {
      item: data.name ?? '',
      attribute1: 'attribute1',
      attribute2: 'attribute2',
      mod: 'mod',
      talent: 'talent',
    };
  }
}
