import { Component } from '@angular/core';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-loadout-overview',
  templateUrl: './loadout-overview.component.html',
  styleUrl: './loadout-overview.component.scss'
})
export class LoadoutOverviewComponent {
  protected loadouts$ = this.store.loadouts$;

  constructor(private store: StoreService) {
  }
}
