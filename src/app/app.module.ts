import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MaterialModule } from './material-angular.module';
import { GearItemComponent } from './gear-item/gear-item.component';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';
import { AttributeIconComponent } from './attribute-icon/attribute-icon.component';
import { AttributeIconPipe } from 'src/pipes/attribute-icon.pipe';
import { GearRarityColorPipe } from 'src/pipes/gear-rarity-color.pipe';
import { BodyGearItemPickerComponent } from './body-gear-item-picker/body-gear-item-picker.component';

@NgModule({
  declarations: [AppComponent,
    GearItemComponent,
    BodyGearItemsComponent,
    AttributeIconPipe,
    AttributeIconComponent,
    GearRarityColorPipe,
    BodyGearItemPickerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
