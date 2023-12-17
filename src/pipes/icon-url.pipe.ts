import { Pipe, PipeTransform } from '@angular/core';
import { Icons } from 'src/models/Icons';

@Pipe({
  name: 'iconUrl'
})
export class IconUrlPipe implements PipeTransform {
  private baseUrl = 'https://raw.githubusercontent.com/mxswat/mx-division-builds/master/public/icons/';

  transform(icon: Icons, folder: "brands" | "skills" | null = null): string {
    if (folder) {
      return this.baseUrl + folder + '/' + icon + '.png';
    } else {
      return this.baseUrl + icon + '.png';
    }
  }

}
