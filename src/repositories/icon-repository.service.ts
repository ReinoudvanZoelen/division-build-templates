import { Injectable } from '@angular/core';
import { EquipmentBrandType } from 'src/models/EquipmentBrand';
import { GeneralIconType } from 'src/models/GeneralIcon';
import { SkillIconType } from 'src/models/SkillIcon';

@Injectable({
  providedIn: 'root'
})
export class IconSourceRepository {
  private baseUrl = 'https://raw.githubusercontent.com/mxswat/mx-division-builds/master/public/icons/';

  public GetIconSourceFor(subject: GeneralIconType): string { return this.baseUrl + subject + '.png'; }
  public GetIconSourceForBrand(subject: EquipmentBrandType): string { return this.baseUrl + 'brands/' + subject + '.png'; }
  public GetIconSourceForSkill(subject: SkillIconType): string { return this.baseUrl + 'skills/' + subject + '.png'; }
}
