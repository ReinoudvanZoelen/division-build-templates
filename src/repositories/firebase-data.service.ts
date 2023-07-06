import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Equipment } from 'src/app/body-gear-items/body-gear-items.component';
import { EquipmentItem } from 'src/models/EquipmentItem';

interface Dictionary<T> {
  [Id: string]: T;
}

@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseDataService<T> {
  private readonly url = 'https://division-build-templates-default-rtdb.europe-west1.firebasedatabase.app';
  abstract subject: string;

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Dictionary<T>> {
    return this.http.get(`${this.url}/${this.subject}.json`)
      .pipe(map(item => item as Dictionary<T>));
  }
  public GetById(id: string): Observable<T> {
    return this.http.get(`${this.url}/${this.subject}/${id}.json`)
      .pipe(map(item => item as T));
  }
  public Create(body: T): Observable<any> {
    return this.http.post(`${this.url}/${this.subject}.json`, body);
  }
  public Delete(body: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.subject}.json`, body);
  }
  public Update(body: { Id: string } & T): Observable<any> {
    return this.http.put(`${this.url}/${this.subject}.json`, body);
  }
}

export class EquipmentStorageModel {
  MaskSlot: EquipmentItemStorageModel;
  BackpackSlot: EquipmentItemStorageModel;
  VestSlot: EquipmentItemStorageModel;
  GlovesSlot: EquipmentItemStorageModel;
  HolsterSlot: EquipmentItemStorageModel;
  KneePadsSlot: EquipmentItemStorageModel;
}

export class EquipmentItemStorageModel {
  item: string;
  attribute1: string;
  attribute2: string;
  mod: string;
  talent: string;
}

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  subject: string = EquipmentStorageModel.name;

  constructor(private foo: FirebaseDataService<EquipmentStorageModel>) {
    foo.subject = this.subject;
  }

  public Add(data: Equipment): Observable<any> {
    return this.foo.Create(this.mapEquipment(data));
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