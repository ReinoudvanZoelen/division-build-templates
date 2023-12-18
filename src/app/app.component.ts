import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/firebase/firebase.service';
import { Firebase_EquipmentItem_Create } from 'src/firebase/models/EquipmentItem';
import BaseCSVDataService from 'src/store/csv/base-csv-data.service';
import { GearDataService } from 'src/store/csv/gear-data.service';
import { StoreService } from 'src/store/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'division-builds';

  constructor(private store: StoreService, private firebase: FirebaseService, private gearDataService: GearDataService) { }

  ngOnInit(): void {
    this.store.dispatchGetLoadouts();
    this.store.dispatchExtractCSV();

    // this.csvToFirebase();
  }

  private csvToFirebase() {
    this.gearDataService.GetAllData().subscribe(items => {
      items.forEach(item => {
        this.firebase.CreateEquipmentItem(new Firebase_EquipmentItem_Create(item));
      });
    })
  }
}
