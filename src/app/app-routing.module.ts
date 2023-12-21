import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyGearItemsComponent } from './body-gear-items/body-gear-items.component';
import { EditLoadoutComponent } from './edit-loadout/edit-loadout.component';
import { LoadoutOverviewComponent } from './loadout-overview/loadout-overview.component';

const routes: Routes = [
  { path: 'create', component: BodyGearItemsComponent },
  { path: 'edit/:id', component: EditLoadoutComponent },
  { path: '', pathMatch: 'full', component: LoadoutOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }