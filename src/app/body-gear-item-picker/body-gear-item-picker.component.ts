import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentSlot } from 'src/models/EquipmentSlot';
import { GearDataService } from 'src/repositories/GearDataService';
import { IconSourceRepository } from '../../repositories/icon-repository.service';
import { EquipmentRarity } from 'src/models/EquipmentRarity';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) slot: EquipmentSlot;
  public EquipmentRarity = EquipmentRarity;


  public availableItems$: BehaviorSubject<EquipmentItem[]>;

  constructor(public iconSourceRepository: IconSourceRepository,
    private gearDataService: GearDataService) {

  }

  ngOnInit(): void {
    this.availableItems$ = this.gearDataService.getData(this.slot);
  }

  ngOnDestroy(): void {
    this.availableItems$.unsubscribe();
  }

}
