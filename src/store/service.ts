import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Loadout } from "src/models/Loadout";
import { StoreActions } from "./actions";
import { loadouts$ } from "./selectors";
import { IStoreState } from "./state";
import { Loadout_Create } from "./models/Loadout";
import { Firebase_Loadout_Create } from "./firebase/models/Loadout";

@Injectable({
    providedIn: "root",
})
export class StoreService {
    constructor(private store: Store<IStoreState>) { }

    public get loadouts$(): Observable<Loadout[]> {
        return this.store.select(loadouts$)
    }

    public saveLoadout(model: Loadout_Create): void {
        this.log('saveLoadout', model);

        var loadout = new Firebase_Loadout_Create(model);
        this.log('Loadout creation model', loadout);
        
        this.store.dispatch(StoreActions.createLoadout({ loadout }));
    }

    public dispatchGetLoadouts(): void {
        this.log('dispatchGetLoadouts')

        this.store.dispatch(StoreActions.getLoadouts());
    }

    private log(methodName: string, passedParameters: any = null) {
        console.log('[StoreService] ' + methodName, passedParameters);
    }
}