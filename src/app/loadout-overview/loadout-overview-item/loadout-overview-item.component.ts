import { Component, Input } from '@angular/core';
import { Loadout } from 'src/store/models/Loadout';

@Component({
  selector: 'app-loadout-overview-item',
  templateUrl: './loadout-overview-item.component.html',
  styleUrl: './loadout-overview-item.component.scss'
})
export class LoadoutOverviewItemComponent {
  @Input({ required: true }) loadout: Loadout;
}
