import { Component, Input } from '@angular/core';
import { GearSlot } from 'src/models/GearSlot';
import { IconSourceRepository } from '../../repositories/icon-repository.service';

@Component({
  selector: 'app-body-gear-item-picker',
  templateUrl: './body-gear-item-picker.component.html',
  styleUrls: ['./body-gear-item-picker.component.scss']
})
export class BodyGearItemPickerComponent {
  @Input({ required: true }) slot: GearSlot;

  constructor(public iconSourceRepository: IconSourceRepository) {

  }
}
