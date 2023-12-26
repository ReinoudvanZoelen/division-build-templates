import { Component, Input } from '@angular/core';
import { GearAttributes } from 'src/models/GearAttributes';

@Component({
  selector: 'app-attribute-icon',
  templateUrl: './attribute-icon.component.html',
  styleUrls: ['./attribute-icon.component.scss']
})
export class AttributeIconComponent {
  @Input({ required: true }) public attribute: GearAttributes;
}
