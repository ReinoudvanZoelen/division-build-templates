import { CoreGearAttributes, SecondaryGearAttributes } from "src/models/GearAttributes";

export class Firebase_Gear_Create {
    itemId: string;
    majorAttribute?: CoreGearAttributes;
    minorAttribute1?: SecondaryGearAttributes;
    minorAttribute2?: SecondaryGearAttributes;
    mod1?: string;
    mod2?: string;
    talentId?: string;
}

// export class Firebase_Gear extends Firebase_Gear_Create {
//     id: string;
// }