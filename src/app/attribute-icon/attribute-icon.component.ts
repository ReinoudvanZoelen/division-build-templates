import { Component, Input } from '@angular/core';
import { ItemAttribute } from 'src/models/ItemAttribute';

@Component({
  selector: 'app-attribute-icon',
  templateUrl: './attribute-icon.component.html',
  styleUrls: ['./attribute-icon.component.scss']
})
export class AttributeIconComponent {
  @Input({ required: true }) attribute: ItemAttribute;
}
