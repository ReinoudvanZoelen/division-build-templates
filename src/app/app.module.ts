import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MaterialModule } from './material-angular.module';
import { GearItemComponent } from './gear-item/gear-item.component';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';

@NgModule({
  declarations: [AppComponent, GearItemComponent, BodyGearItemsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
