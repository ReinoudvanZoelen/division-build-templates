import { Injectable } from "@angular/core";
import { EquipmentItem } from "src/models/EquipmentItem";
import { EquipmentRarity } from "src/models/EquipmentRarity";
import { EquipmentSlot } from "src/models/EquipmentSlot";
import BaseCSVDataService from "./BaseCSVDataService";
import { MappingService } from "./mapping.service";
import { BehaviorSubject } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class GearDataService {
    constructor(
        // private MaskDataService: MaskDataService,
        private BackpackDataService: BackpackDataService,
        // private VestDataService: VestDataService,
        // private GlovesDataService: GlovesDataService,
        // private HolsterDataService: HolsterDataService,
        // private KneePadsDataService: KneePadsDataService
    ) {
    }

    public getData(slot: EquipmentSlot): BehaviorSubject<EquipmentItem[]> {
        switch (slot) {
            // case EquipmentSlot.Mask: return this.MaskDataService.getData();
            case EquipmentSlot.Backpack: return this.BackpackDataService.getData();
            // case EquipmentSlot.Vest: return this.VestDataService.getData();
            // case EquipmentSlot.Gloves: return this.GlovesDataService.getData();
            // case EquipmentSlot.Holster: return this.HolsterDataService.getData();
            // case EquipmentSlot.KneePads: return this.KneePadsDataService.getData();

            // Temporary
            default: return this.BackpackDataService.getData();
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
            rarity: EquipmentRarity.Exotic,
            brand: this.mappingService.getBrand(data['Brand'])
        }
    }
}