import { Component, Input } from '@angular/core';
import { EquipmentItem } from 'src/store/models/EquipmentItem';

@Component({
  selector: 'app-gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss'],
})
export class GearItemComponent {
  @Input() public item: EquipmentItem | undefined;
}