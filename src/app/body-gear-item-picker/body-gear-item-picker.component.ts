import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { EquipmentItem } from 'src/store/models/EquipmentItem';
import { StoreService } from 'src/store/service';
import { IconSourceRepository } from '../../repositories/icon-repository.service';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) slot: EquipmentSlotType;

  @Output() itemClicked = new EventEmitter<EquipmentItem>();

  public EquipmentRarity = EquipmentRarityType;
  public equipmentItems$ = this.store.equipmentItems$;

  constructor(
    private store: StoreService,
    public iconSourceRepository: IconSourceRepository) {
  }

  ngOnInit(): void {
    // this.availableItems$ = this.store.equipmentItemsForSlot$(this.slot);
    // this.availableItems$ = this.gearDataService.GetData(this.slot);
  }

  ngOnDestroy(): void {
    // this.availableItems$.unsubscribe();
  }

  public onClickItem(item: EquipmentItem) {
    this.itemClicked.next(item);
  }

}
