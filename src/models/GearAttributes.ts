export enum CoreGearAttributes {
    Weapon_Damage = "Weapon Damage",
    Armor = "Armor",
    Skill_Tier = "Skill Tier",
    Not_Applicable = "Not_Applicable",
}

export enum SecondaryGearAttributes {
    // Offensive
    Critical_Hit_Chance = "Critical Hit Chance",
    Critical_Hit_Damage = "Critical Hit Damage",
    Headshot_Damage = "Headshot Damage",
    Weapon_Handling = "Weapon Handling",

    // Defensive
    Armor_Regeneration = "Armor Regeneration",
    Explosive_Resistance = "Explosive Resistance",
    Hazard_Protection = "Hazard Protection",
    Health = "Health",

    // Utility
    Skill_Damage = "Skill Damage",
    Skill_Haste = "Skill Haste",
    Skill_Repair = "Skill Repair",
    Status_Effects = "Status Effects",
}

export type GearAttributes = CoreGearAttributes | SecondaryGearAttributes;
