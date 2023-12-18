import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, map } from "rxjs";
import { EquipmentSlotType } from "src/models/EquipmentSlot";
import { EquipmentItem_Create } from "src/store/models/EquipmentItem";
import { MappingService } from "../../repositories/mapping.service";
import BaseCSVDataService from "./base-csv-data.service";

@Injectable({
    providedIn: 'root'
})
export class GearDataService {
    constructor(
        private MaskDataService: MaskDataService,
        private BackpackDataService: BackpackDataService,
        private VestDataService: VestDataService,
        private GlovesDataService: GlovesDataService,
        private HolsterDataService: HolsterDataService,
        private KneePadsDataService: KneePadsDataService
    ) {
    }

    public GetAllData(): Observable<EquipmentItem_Create[]> {
        return combineLatest([
            this.MaskDataService.GetData(),
            this.BackpackDataService.GetData(),
            this.VestDataService.GetData(),
            this.GlovesDataService.GetData(),
            this.HolsterDataService.GetData(),
            this.KneePadsDataService.GetData()
        ]).pipe(map((wrapper) => {
            if (wrapper[0].length > 0
                && wrapper[1].length > 0
                && wrapper[2].length > 0
                && wrapper[3].length > 0
                && wrapper[4].length > 0
                && wrapper[5].length > 0) {
                var items: EquipmentItem_Create[] = [];
                return items.concat(wrapper[0], wrapper[1], wrapper[2], wrapper[3], wrapper[4], wrapper[5]);
            } else {
                return [];
            }
        }));
    }

    public GetData(slot: EquipmentSlotType): BehaviorSubject<EquipmentItem_Create[]> {
        switch (slot) {
            case EquipmentSlotType.Mask: return this.MaskDataService.GetData();
            case EquipmentSlotType.Backpack: return this.BackpackDataService.GetData();
            case EquipmentSlotType.Chest: return this.VestDataService.GetData();
            case EquipmentSlotType.Gloves: return this.GlovesDataService.GetData();
            case EquipmentSlotType.Holster: return this.HolsterDataService.GetData();
            case EquipmentSlotType.KneePads: return this.KneePadsDataService.GetData();
        }
    }
}


@Injectable({
    providedIn: 'root'
})
export class MaskDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Mask';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.Mask,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class BackpackDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Backpack';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.Backpack,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class VestDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Chest';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.Chest,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class GlovesDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Gloves';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.Gloves,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class HolsterDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Holster';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.Holster,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class KneePadsDataService extends BaseCSVDataService<EquipmentItem_Create> {
    override urlPart: string = 'gear/Kneepads';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem_Create {
        return {
            name: data['Item Name'],
            slot: EquipmentSlotType.KneePads,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Core']),
            attributes: []
        }
    }
}