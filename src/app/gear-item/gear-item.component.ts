import { Component, Input } from '@angular/core';
import { EquipmentItem } from 'src/models/EquipmentItem';
import { IconSourceRepository } from '../../repositories/icon-repository.service';

@Component({
  selector: 'app-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
})
export class GearItemComponent {
  @Input() item: EquipmentItem;

  constructor(public iconSourceRepository: IconSourceRepository) {
  }
}