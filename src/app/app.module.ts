import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { GearRarityColorPipe } from 'src/pipes/gear-rarity-color.pipe';
import { IconUrlPipe } from 'src/pipes/icon-url.pipe';
import { IconPipe } from 'src/pipes/icon.pipe';
import { StoreModule } from 'src/store/module';
import { GearRarityPipe } from '../pipes/gear-rarity.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeIconComponent } from './attribute-icon/attribute-icon.component';
import { BodyGearItemPickerComponent } from './body-gear-item-picker/body-gear-item-picker.component';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';
import { EditLoadoutComponent } from './edit-loadout/edit-loadout.component';
import { GearItemAttributesComponent } from './gear-item/gear-item-attributes/gear-item-attributes.component';
import { GearItemComponent } from './gear-item/gear-item.component';
import { LoadoutOverviewItemComponent } from './loadout-overview/loadout-overview-item/loadout-overview-item.component';
import { LoadoutOverviewComponent } from './loadout-overview/loadout-overview.component';
import { MaterialModule } from './material-angular.module';
import { TopbarComponent } from './topbar/topbar.component';

const CustomComponents = [
  AttributeIconComponent,
  BodyGearItemPickerComponent,
  BodyGearItemsComponent,
  EditLoadoutComponent,
  GearItemAttributesComponent,
  GearItemComponent,
  LoadoutOverviewComponent,
  LoadoutOverviewItemComponent,
  TopbarComponent,
];

const Pipes = [
  GearRarityColorPipe,
  GearRarityPipe,
  IconPipe,
  IconUrlPipe
];

@NgModule({
  declarations: [
    AppComponent,
    ...CustomComponents,
    ...Pipes
  ],
  imports: [
    StoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule,
    HttpClientModule,
    AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
