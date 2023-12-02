import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, forkJoin, map } from "rxjs";
import { EquipmentSlotType } from "src/models/EquipmentSlot";
import { EquipmentItem } from "src/store/models/EquipmentItem";
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

    public GetAllData(): Observable<EquipmentItem[]> {
        return combineLatest([
            this.MaskDataService.GetDataAsync(),
            this.BackpackDataService.GetDataAsync(),
            this.VestDataService.GetDataAsync(),
            this.GlovesDataService.GetDataAsync(),
            this.HolsterDataService.GetDataAsync(),
            this.KneePadsDataService.GetDataAsync()
        ]).pipe(map((data) => data[0].concat(data[1], data[2], data[3], data[4], data[5])));
    }

    public GetData(slot: EquipmentSlotType): BehaviorSubject<EquipmentItem[]> {
        switch (slot) {
            case EquipmentSlotType.Mask: return this.MaskDataService.GetData();
            case EquipmentSlotType.Backpack: return this.BackpackDataService.GetData();
            case EquipmentSlotType.Vest: return this.VestDataService.GetData();
            case EquipmentSlotType.Gloves: return this.GlovesDataService.GetData();
            case EquipmentSlotType.Holster: return this.HolsterDataService.GetData();
            case EquipmentSlotType.KneePads: return this.KneePadsDataService.GetData();
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
            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.Mask,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
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

            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.Backpack,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
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

            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.Vest,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
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

            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.Gloves,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
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

            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.Holster,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
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

            id: this.mappingService.getId(),
            name: data['Item Name'],
            slot: EquipmentSlotType.KneePads,
            rarity: this.mappingService.getRarity(data['Quality']),
            brand: this.mappingService.getBrand(data['Brand']),
            coreAttribute: this.mappingService.getCoreAttribute(data['Type']),
            attributes: []
        }
    }
}