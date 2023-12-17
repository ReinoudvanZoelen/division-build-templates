

type slot_icons = "backpack" | "chest" | "gloves" | "holster" | "kneepads" | "mask" | "main-weapon" | "sidearm";
type attribute_icons = "blank_attribute" | "defense1" | "defense2" | "defense3_1" | "defense3_2" | "offense1" | "offense2" | "offense3_1" | "offense3_2" | "tech1" | "tech2" | "tech3_1" | "tech3_2";
type mod_icons = "blank_mod";
type shd_icons = "shd" | "shd_big" | "shd_med";
type additional_icons = "handling1" | "named";

export type RootIcons = slot_icons | attribute_icons | mod_icons | shd_icons | additional_icons;

type chem_icons = "chem_firestarter" | "chem_foam" | "chem_oxidizer" | "chem_reinforcer";
type decoy_icons = "decoy_holographic";
type drone_icons = "drone_bombardier" | "drone_defender" | "drone_fixer" | "drone_striker" | "drone_tactician";
type firefly_icons = "firefly_blinder" | "firefly_burster" | "firefly_demolisher";
type hive_icons = "hive_artificer" | "hive_booster" | "hive_restorer" | "hive_reviver" | "hive_stinger";
type pulse_icons = "pulse_achillies" | "pulse_banshee" | "pulse_jammer" | "pulse_remote" | "pulse_scanner";
type seeker_icons = "seeker_airburst" | "seeker_cluster" | "seeker_explosive" | "seeker_mender";
type shield_icons = "shield_bulwark" | "shield_crusader" | "shield_deflector" | "shield_striker";
type sticky_icons = "sticky_burn" | "sticky_emp" | "sticky_explosive";
type trap_icons = "trap_repair" | "trap_shock" | "trap_shrapnel";
type turret_icons = "turret_artillery" | "turret_assault" | "turret_incinerator" | "turret_sniper";

export type SkillIcons = "blank_skill" | chem_icons | decoy_icons | drone_icons | firefly_icons | hive_icons | pulse_icons | seeker_icons | shield_icons | sticky_icons | trap_icons | turret_icons;

export type BrandIcons = "511" | "aces" | "airaldi" | "alps" | "badger" | "belstone" | "brazos" | "cavalier" | "ceska" | "china" | "crafted" | "douglas" | "eclipse" | "electrique" | "empress" | "exotic" | "fenris" | "foundry" | "future" | "gila" | "golan" | "grupo" | "habsburg" | "hanau" | "hard" | "heartbreaker" | "hotshot" | "hunters" | "murakami" | "negotiators" | "ongoing" | "overlord" | "petrov" | "providence" | "richter" | "rigger" | "sokolov" | "strikers" | "system" | "tip" | "true" | "umbra" | "uzina" | "walker" | "wyvern" | "yaahl";

export type Icons = RootIcons | SkillIcons | BrandIcons;