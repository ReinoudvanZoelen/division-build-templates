import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { EquipmentItem } from 'src/store/models/EquipmentItem';
import { StoreService } from 'src/store/service';
import { IconSourceRepository } from '../../repositories/icon-repository.service';
import { Observable } from 'rxjs';

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
    private store: StoreService,
    public iconSourceRepository: IconSourceRepository) {
  }

  ngOnInit(): void {
    this.equipmentItems$ = this.store.equipmentItemsForSlot$(this.slot);
  }

  public onClickItem(item: EquipmentItem) {
    this.itemClicked.next(item);
  }

}
