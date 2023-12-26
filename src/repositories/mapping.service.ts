import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { BrandIcons } from 'src/models/Icons';
import { CoreGearAttributes } from 'src/models/GearAttributes';

@Injectable({
  providedIn: 'root'
})
export class MappingService {
  public getRarity(csvQualicty: string): EquipmentRarityType {
    switch (csvQualicty) {
      case 'Exotic': return EquipmentRarityType.Exotic;
      case 'High End': return EquipmentRarityType.Brand;
      case 'Named': return EquipmentRarityType.Brand;
      case 'Gearset': return EquipmentRarityType.Set;
      default: return EquipmentRarityType.Brand;
    }
  }

  public getBrand(csvBrand: string): BrandIcons {
    switch (csvBrand) {
      case '5.11 Tactical': return "511";
      case 'Aces and Eights': return "aces";
      case 'Airaldi Holdings': return "airaldi";
      case 'Alps Summit Armaments': return "alps";
      case 'Badger Tuff': return "badger";
      case 'Ceska Vyroba s.r.o.': return "ceska";
      case 'China Light Industries Corporation': return "china";
      case 'Douglas & Harding': return "douglas";
      case 'Fenris Group AB': return "fenris";
      case 'Foundry Bullwark': return "foundry";
      case 'Future Initiative': return "future";
      case 'Gila Guard': return "gila";
      case 'Golan Gear Ltd': return "golan";
      case 'Grupo Sombra S.A.': return "grupo";
      case 'Hana-U Corporation': return "hanau";
      case 'Hard Wired': return "hard";
      case 'Murakami Industries': return "murakami";
      case "Negotiator's Dilemma": return "negotiators";
      case 'Ongoing Directive': return "ongoing";
      case 'Overlord Armaments': return "overlord";
      case 'Petrov Defense Group': return "petrov";
      case 'Providence Defense': return "providence";
      case 'Richter & Kaiser GmbH': return "richter";
      case 'Sokolov Concern': return "sokolov";
      case "Striker's Battlegear": return "strikers";
      case 'System Corruption': return "system";
      case 'Tip of the Spear': return "tip";
      case 'True Patriot': return "true";
      case 'Wyvern Wear': return "wyvern";
      case 'Yaahl Gear': return "yaahl";

      case 'unknown display value': return "belstone";
      case 'unknown display value': return "brazos";
      case 'unknown display value': return "cavalier";
      case 'unknown display value': return "crafted";
      case 'unknown display value': return "eclipse";
      case 'unknown display value': return "electrique";
      case 'unknown display value': return "empress";
      case 'unknown display value': return "habsburg";
      case 'unknown display value': return "heartbreaker";
      case 'unknown display value': return "hotshot";
      case 'unknown display value': return "hunters";
      case 'unknown display value': return "rigger";
      case 'unknown display value': return "umbra";
      case 'unknown display value': return "uzina";
      case 'unknown display value': return "walker";

      default: return 'exotic';
    }
  }

  public getCoreAttribute(type: string): CoreGearAttributes {
    switch (type) {
      case 'Weapon Damage': return CoreGearAttributes.Weapon_Damage;
      case 'Armor': return CoreGearAttributes.Armor;
      case 'Skill Tier': return CoreGearAttributes.Skill_Tier;
      default: return CoreGearAttributes.Not_Applicable;
    }
  }
}
