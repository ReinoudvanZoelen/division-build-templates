import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule as NgRxStoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CSVEffects } from "./effects/csv.effects";
import { EquipmentItemStoreEffects } from "./effects/equipment-item.effects";
import { LoadoutStoreEffects } from "./effects/loadout.effects";
import { storeReducer } from "./reducers";
import { StoreService } from "./service";

@NgModule({
    imports: [
        NgRxStoreModule.forRoot({ 'division': storeReducer }),
        EffectsModule.forRoot([CSVEffects, EquipmentItemStoreEffects, LoadoutStoreEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            connectInZone: true,
        })
    ],
    exports: [],
    declarations: [],
    bootstrap: [],
    providers: [StoreService]
})
export class StoreModule { }
