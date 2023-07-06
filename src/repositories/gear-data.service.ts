import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { EquipmentItem } from "src/models/EquipmentItem";
import { EquipmentSlot } from "src/models/EquipmentSlot";
import BaseCSVDataService from "./base-csv-data.service";
import { MappingService } from "./mapping.service";

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

    public getData(slot: EquipmentSlot): BehaviorSubject<EquipmentItem[]> {
        switch (slot) {
            case EquipmentSlot.Mask: return this.MaskDataService.getData();
            case EquipmentSlot.Backpack: return this.BackpackDataService.getData();
            case EquipmentSlot.Vest: return this.VestDataService.getData();
            case EquipmentSlot.Gloves: return this.GlovesDataService.getData();
            case EquipmentSlot.Holster: return this.HolsterDataService.getData();
            case EquipmentSlot.KneePads: return this.KneePadsDataService.getData();
        }
    }
}


@Injectable({
    providedIn: 'root'
})
export class MaskDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Mask';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.Mask,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class BackpackDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Backpack';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.Backpack,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class VestDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Chest';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.Vest,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class GlovesDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Gloves';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.Gloves,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class HolsterDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Holster';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.Holster,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class KneePadsDataService extends BaseCSVDataService<EquipmentItem> {
    override urlPart: string = 'gear/Kneepads';

    constructor(private mappingService: MappingService) {
        super();
    }

    override parse(data: any): EquipmentItem {
        return {
            name: data['Item Name'],
            slot: EquipmentSlot.KneePads,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}