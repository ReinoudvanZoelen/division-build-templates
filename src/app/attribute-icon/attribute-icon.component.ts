import { Component, Input, OnInit } from '@angular/core';
import { GeneralIconType } from 'src/models/GeneralIcon';
import { ItemAttribute } from 'src/models/ItemAttribute';
import { CoreItemAttributeType } from 'src/models/ItemAttributeType';
import { IconSourceRepository } from 'src/repositories/icon-repository.service';

@Component({
  selector: 'app-attribute-icon',
  templateUrl: './attribute-icon.component.html',
  styleUrls: ['./attribute-icon.component.scss']
})
export class AttributeIconComponent implements OnInit {
  @Input({ required: true }) attribute: ItemAttribute;
  public icon: GeneralIconType;

  constructor(public iconSourceRepository: IconSourceRepository) {
  }

  ngOnInit(): void {
    switch (this.attribute?.type) {
      case CoreItemAttributeType.Armor_Core: this.icon = "defense1"; break;
      case CoreItemAttributeType.Weapon_Damage: this.icon = "offense1"; break;
      case CoreItemAttributeType.Skill_Tier: this.icon = "tech1"; break;
    }
  }
}
