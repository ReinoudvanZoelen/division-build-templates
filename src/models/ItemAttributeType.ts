export enum CoreItemAttributeType {
    Armor_Core,
    Weapon_Damage,
    Skill_Tier,
    Not_Applicable,
}

export enum SecondaryItemAttributeType {
    Armor_Regen,
    Armor_On_Kill,
    Health,
    Hazard_Protection,
    Critical_Hit_Chance,
    Critical_Hit_Damage,
    Headshot_Damage,
    Weapon_Handling,
    Incoming_Repairs,
    Repair_Skills,
    Skill_Damage,
    Status_Effects,
    Skill_Haste,
}

export type ItemAttributeType = CoreItemAttributeType | SecondaryItemAttributeType;