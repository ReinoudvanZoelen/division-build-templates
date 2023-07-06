import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { EquipmentSlot } from 'src/models/EquipmentSlot';
import { GearDataService } from 'src/repositories/gear-data.service';
import { IconSourceRepository } from '../../repositories/icon-repository.service';
import { EquipmentRarity } from 'src/models/EquipmentRarity';
import { BuildService } from 'src/repositories/firebase-data.service';
import { Equipment } from '../body-gear-items/body-gear-items.component';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent implements OnInit, OnDestroy {
  @Input({ required: true }) slot: EquipmentSlot;

  @Output() itemClicked = new EventEmitter<EquipmentItem>();

  public EquipmentRarity = EquipmentRarity;


  public availableItems$: BehaviorSubject<EquipmentItem[]>;

  constructor(public iconSourceRepository: IconSourceRepository,
    private gearDataService: GearDataService,
    private userService: BuildService) {

  }

  ngOnInit(): void {
    this.availableItems$ = this.gearDataService.getData(this.slot);
  }

  ngOnDestroy(): void {
    this.availableItems$.unsubscribe();
  }

  public onClickItem(item: EquipmentItem) {
    const fake: Equipment = {
      Mask: item,
      Backpack: item,
      Vest: item,
      Gloves: item,
      Holster: item,
      KneePads: item,
    }

    this.userService.Add(fake).subscribe((x: any) => {
      console.log(x);
    });

    this.itemClicked.next(item);
  }

}
