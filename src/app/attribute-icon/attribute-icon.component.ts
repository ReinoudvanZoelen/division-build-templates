import { Component, Input } from '@angular/core';
import { ItemAttributeType } from 'src/models/ItemAttributeType';

@Component({
  selector: 'app-attribute-icon',
  templateUrl: './attribute-icon.component.html',
  styleUrls: ['./attribute-icon.component.scss']
})
export class AttributeIconComponent {
  @Input({ required: true }) public attribute: ItemAttributeType;
}
