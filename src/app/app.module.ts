import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GearRarityColorPipe } from 'src/pipes/gear-rarity-color.pipe';
import { IconUrlPipe } from 'src/pipes/icon-url.pipe';
import { IconPipe } from 'src/pipes/icon.pipe';
import { StoreModule } from 'src/store/module';
import { GearRarityPipe } from '../pipes/gear-rarity.pipe';
import { AppComponent } from './app.component';
import { AttributeIconComponent } from './attribute-icon/attribute-icon.component';
import { BodyGearItemPickerComponent } from './body-gear-item-picker/body-gear-item-picker.component';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';
import { GearItemAttributesComponent } from './gear-item/gear-item-attributes/gear-item-attributes.component';
import { GearItemComponent } from './gear-item/gear-item.component';
import { MaterialModule } from './material-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    GearItemComponent,
    GearItemAttributesComponent,
    BodyGearItemsComponent,
    AttributeIconComponent,
    GearRarityColorPipe,
    BodyGearItemPickerComponent,
    GearRarityPipe,
    IconPipe,
    IconUrlPipe],
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
