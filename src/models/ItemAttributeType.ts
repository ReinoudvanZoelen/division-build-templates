export enum CoreItemAttributeType {
    Armor_Core = "Armor_Core",
    Weapon_Damage = "Weapon_Damage",
    Skill_Tier = "Skill_Tier",
    Not_Applicable = "Not_Applicable",
}

export enum SecondaryItemAttributeType {
    Armor_Regen = "Armor_Regen",
    Armor_On_Kill = "Armor_On_Kill",
    Health = "Health",
    Hazard_Protection = "Hazard_Protection",
    Critical_Hit_Chance = "Critical_Hit_Chance",
    Critical_Hit_Damage = "Critical_Hit_Damage",
    Headshot_Damage = "Headshot_Damage",
    Weapon_Handling = "Weapon_Handling",
    Incoming_Repairs = "Incoming_Repairs",
    Repair_Skills = "Repair_Skills",
    Skill_Damage = "Skill_Damage",
    Status_Effects = "Status_Effects",
    Skill_Haste = "Skill_Haste",
}

export type ItemAttributeType = CoreItemAttributeType | SecondaryItemAttributeType;