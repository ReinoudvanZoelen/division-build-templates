import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { EquipmentItem } from 'src/store/models/EquipmentItem';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent implements OnInit {
  @Input({ required: true }) slot: EquipmentSlotType;
  @Output() itemClicked = new EventEmitter<EquipmentItem>();

  protected EquipmentRarity = EquipmentRarityType;
  protected equipmentItems$: Observable<EquipmentItem[]>;

  constructor(
    private store: StoreService) {
  }

  ngOnInit(): void {
    this.equipmentItems$ = this.store.equipmentItemsForSlot$(this.slot);
  }

  public onClickItem(item: EquipmentItem) {
    console.log(item);
    this.itemClicked.next(item);
  }

}
