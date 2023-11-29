import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { StoreModule, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AttributeIconPipe } from 'src/pipes/attribute-icon.pipe';
import { GearRarityColorPipe } from 'src/pipes/gear-rarity-color.pipe';
import { CSVEffects } from 'src/store/effects/csv.effects';
import { EquipmentItemStoreEffects } from 'src/store/effects/equipment-item.effects';
import { LoadoutStoreEffects } from 'src/store/effects/loadout.effects';
import { storeReducer } from 'src/store/reducers';
import { GearRarityPipe } from '../pipes/gear-rarity.pipe';
import { AttributeIconComponent } from './attribute-icon/attribute-icon.component';
import { BodyGearItemPickerComponent } from './body-gear-item-picker/body-gear-item-picker.component';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';
import { GearItemComponent } from './gear-item/gear-item.component';
import { MaterialModule } from './material-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    GearItemComponent,
    BodyGearItemsComponent,
    AttributeIconPipe,
    AttributeIconComponent,
    GearRarityColorPipe,
    BodyGearItemPickerComponent,
    GearRarityPipe,],
  imports: [StoreModule.forRoot(storeReducer), EffectsModule.forRoot([CSVEffects, LoadoutStoreEffects, EquipmentItemStoreEffects]), BrowserModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({}),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
