import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { StoreActions } from "./actions";
import { Firebase_EquipmentItem_Create } from "./firebase/models/EquipmentItem";
import { Firebase_Loadout_Create } from "./firebase/models/Loadout";
import { EquipmentItem_Create } from "./models/EquipmentItem";
import { Loadout, Loadout_Create } from "./models/Loadout";
import { equipmentItems$, loadouts$ } from "./selectors";
import { IStoreState } from "./state";

@Injectable({
    providedIn: "root",
})
export class StoreService {
    constructor(private store: Store<IStoreState>) { }

    public get loadouts$(): Observable<Loadout[]> {
        return this.store.select(loadouts$)
    }

    public get equipmentItems$(): Observable<Loadout[]> {
        return this.store.select(equipmentItems$)
    }

    public saveLoadout(model: Loadout_Create): void {
        var loadout = new Firebase_Loadout_Create(model);
        this.store.dispatch(StoreActions.createLoadout({ loadout }));
    }

    public dispatchGetLoadouts(): void {
        this.store.dispatch(StoreActions.getLoadouts());
    }

    public saveEquipmentItem(model: EquipmentItem_Create): void {
        var equipmentItem = new Firebase_EquipmentItem_Create(model);
        this.store.dispatch(StoreActions.createEquipmentItem({ equipmentItem }));
    }

    public dispatchGetEquipmentItems(): void {
        this.store.dispatch(StoreActions.getEquipmentItems());
    }

    public dispatchExtractCSV(): void {
        this.store.dispatch(StoreActions.exactCSV());
    }
}