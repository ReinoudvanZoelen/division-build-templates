import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from "src/environments/environment";
import { FirebaseService } from "./firebase.service";
import { StoreModule } from "src/store/module";

@NgModule({
    imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideDatabase(() => getDatabase()),
        StoreModule
    ],
    exports: [],
    declarations: [],
    bootstrap: [],
    providers: [FirebaseService]
})
export class FirebaseModule { }
