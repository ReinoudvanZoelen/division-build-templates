import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-edit-loadout',
  templateUrl: './edit-loadout.component.html',
  styleUrl: './edit-loadout.component.scss'
})
export class EditLoadoutComponent {
  public loadout$ = this.store.getLoadout(this.route.snapshot.params['id']);

  constructor(private store: StoreService, private route: ActivatedRoute) {
  }
}
