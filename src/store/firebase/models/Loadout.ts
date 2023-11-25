import { Loadout, Loadout_Create } from "src/store/models/Loadout";

export class Firebase_Loadout_Create {
    MaskId?: string;
    BackpackId?: string;
    VestId?: string;
    GlovesId?: string;
    HolsterId?: string;
    KneePadsId?: string;

    constructor(loadout: Loadout_Create) {
        this.MaskId = loadout.Mask?.id;
        this.BackpackId = loadout.Backpack?.id;
        this.VestId = loadout.Vest?.id;
        this.GlovesId = loadout.Gloves?.id;
        this.HolsterId = loadout.Holster?.id;
        this.KneePadsId = loadout.KneePads?.id;
    }
}

export class Firebase_Loadout extends Firebase_Loadout_Create {
    id: string;

    constructor(loadout: Loadout) {
        super(loadout);
        this.id = loadout.id;
    }
}
