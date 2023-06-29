import { Injectable } from '@angular/core';
import { GearRarity } from './models/GearRarity';

@Injectable({
  providedIn: 'root'
})
export class GearService {

  private readonly gearColor: EnumDictionary<GearRarity, string> = {
    [GearRarity.Worn]: '',
    [GearRarity.Standard]: '',
    [GearRarity.Specialized]: '',
    [GearRarity.Superior]: '',
    [GearRarity.HighEnd]: '',
    [GearRarity.Exotic]: ''
  };


  public GetColor(rarity: GearRarity) {
    return this.gearColor[rarity];
  }
}
