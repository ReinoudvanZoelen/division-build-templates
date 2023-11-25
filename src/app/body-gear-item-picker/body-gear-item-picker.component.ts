import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentRarityType } from 'src/models/EquipmentRarity';
import { EquipmentSlotType } from 'src/models/EquipmentSlot';
import { GearDataService } from 'src/repositories/gear-data.service';
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
  public availableItems$: BehaviorSubject<EquipmentItem[]>;

  constructor(public iconSourceRepository: IconSourceRepository,
    private gearDataService: GearDataService) {

  }

  ngOnInit(): void {
    this.availableItems$ = this.gearDataService.GetData(this.slot);
  }

  ngOnDestroy(): void {
    this.availableItems$.unsubscribe();
  }

  public onClickItem(item: EquipmentItem) {
    this.itemClicked.next(item);
  }

}
