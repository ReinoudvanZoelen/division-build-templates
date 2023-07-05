import { Component, Input } from '@angular/core';
import { EquipmentSlot } from 'src/models/EquipmentSlot';
import { IconSourceRepository } from '../../repositories/icon-repository.service';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent {
  @Input({ required: true }) slot: EquipmentSlot;

  constructor(public iconSourceRepository: IconSourceRepository) {

  }
}
