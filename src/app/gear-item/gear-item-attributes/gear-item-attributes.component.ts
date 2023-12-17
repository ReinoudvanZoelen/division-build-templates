import { Component, Input } from '@angular/core';
import { EquipmentItem } from 'src/store/models/EquipmentItem';

@Component({
  selector: 'app-gear-item-attributes',
  templateUrl: './gear-item-attributes.component.html',
  styleUrl: './gear-item-attributes.component.scss'
})
export class GearItemAttributesComponent {
  @Input({ required: true }) public item: EquipmentItem;
}
