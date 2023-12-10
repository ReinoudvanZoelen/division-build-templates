import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { StoreModule } from 'src/store/module';

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
  imports: [
    StoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
