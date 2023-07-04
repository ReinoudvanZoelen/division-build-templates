import { Injectable } from '@angular/core';

export type generalIcons = "backpack" | "blank_attribute" | "blank_mod" | "chest" | "defense1" | "defense2" | "defense3_1" | "defense3_2" | "gloves" | "handling1" | "holster" | "kneepads" | "main-weapon" | "mask" | "named" | "offense1" | "offense2" | "offense3_1" | "offense3_2" | "shd" | "shd_big" | "shd_med" | "sidearm" | "tech1" | "tech2" | "tech3_1" | "tech3_2";
export type brandIcons = "511" | "aces" | "airaldi" | "alps" | "badger" | "belstone" | "brazos" | "cavalier" | "ceska" | "china" | "crafted" | "douglas" | "eclipse" | "electrique" | "empress" | "exotic" | "fenris" | "foundry" | "future" | "gila" | "golan" | "grupo" | "habsburg" | "hanau" | "hard" | "heartbreaker" | "hotshot" | "hunters" | "murakami" | "negotiators" | "ongoing" | "overlord" | "petrov" | "providence" | "richter" | "rigger" | "sokolov" | "strikers" | "system" | "tip" | "true" | "umbra" | "uzina" | "walker" | "wyvern" | "yaahl";
export type skillIcons = "chem_firestarter" | "chem_foam" | "chem_oxidizer" | "chem_reinforcer" | "decoy_holographic" | "drone_bombardier" | "drone_defender" | "drone_fixer" | "drone_striker" | "drone_tactician" | "firefly_blinder" | "firefly_burster" | "firefly_demolisher" | "hive_artificer" | "hive_booster" | "hive_restorer" | "hive_reviver" | "hive_stinger" | "pulse_achillies" | "pulse_banshee" | "pulse_jammer" | "pulse_remote" | "pulse_scanner" | "seeker_airburst" | "seeker_cluster" | "seeker_explosive" | "seeker_mender" | "shield_bulwark" | "shield_crusader" | "shield_deflector" | "shield_striker" | "sticky_burn" | "sticky_emp" | "sticky_explosive" | "trap_repair" | "trap_shock" | "trap_shrapnel" | "turret_artillery" | "turret_assault" | "turret_incinerator" | "turret_sniper";

@Injectable({
  providedIn: 'root'
})
export class IconSourceRepository {
  private baseUrl = 'https://raw.githubusercontent.com/mxswat/mx-division-builds/master/public/icons/';

  public GetIconSourceFor(subject: generalIcons): string { return this.baseUrl + subject + '.png'; }
  public GetIconSourceForBrand(subject: brandIcons): string { return this.baseUrl + 'brands/' + subject + '.png'; }
  public GetIconSourceForSkill(subject: skillIcons): string { return this.baseUrl + 'skills/' + subject + '.png'; }
}
