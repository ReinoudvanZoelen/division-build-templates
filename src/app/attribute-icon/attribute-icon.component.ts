import { Component, Input, OnInit } from '@angular/core';
import { ItemAttribute } from 'src/models/ItemAttribute';
import { ItemAttributeType } from 'src/models/ItemAttributeType';
import { IconSourceRepository, generalIcons } from 'src/repositories/icon-repository.service';

@Component({
  selector: 'app-attribute-icon',
  templateUrl: './attribute-icon.component.html',
  styleUrls: ['./attribute-icon.component.scss']
})
export class AttributeIconComponent implements OnInit {
  @Input({ required: true }) attribute: ItemAttribute;
  public icon: generalIcons;

  constructor(public iconSourceRepository: IconSourceRepository) {
  }

  ngOnInit(): void {
    switch (this.attribute?.type) {
      case ItemAttributeType.Armor_Core: this.icon = "defense1"; break;
      case ItemAttributeType.Weapon_Damage: this.icon = "offense1"; break;
      case ItemAttributeType.Skill_Tier: this.icon = "tech1"; break;
    }
  }
}
