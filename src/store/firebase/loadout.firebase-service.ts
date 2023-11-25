import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Firebase_Loadout, Firebase_Loadout_Create } from './models/Loadout';

@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseLoadoutService {
  private readonly url = 'https://division-build-templates-default-rtdb.europe-west1.firebasedatabase.app';
  private readonly subject: string = 'Loadout';

  constructor(private http: HttpClient) { }

  public GetAllLoadouts(): Observable<Firebase_Loadout[]> {
    return this.http.get(`${this.url}/${this.subject}.json`)
      .pipe(map((items: any) => {
        console.log('Received from the GetAllLoadouts call', items);
        return [];
      }));
  }

  public GetLoadoutById(id: string): Observable<Firebase_Loadout> {
    return this.http.get(`${this.url}/${this.subject}/${id}.json`)
      .pipe(map(item => item as Firebase_Loadout));
  }

  public CreateLoadout(body: Firebase_Loadout_Create): Observable<string> {
    return this.http.post(`${this.url}/${this.subject}.json`, body)
      .pipe(map((item: any) => item.name));
  }

  public DeleteLoadout(body: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.subject}.json`, body);
  }

  public UpdateLoadout(body: Firebase_Loadout): Observable<any> {
    return this.http.put(`${this.url}/${this.subject}.json`, body);
  }
}