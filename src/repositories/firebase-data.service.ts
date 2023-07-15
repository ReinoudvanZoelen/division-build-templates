import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

interface Dictionary<T> {
  [Id: string]: T;
}

@Injectable({
  providedIn: 'root'
})
export abstract class FirebaseDataService<T> {
  private readonly url = 'https://division-build-templates-default-rtdb.europe-west1.firebasedatabase.app';
  abstract subject: string;

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<Dictionary<T>> {
    return this.http.get(`${this.url}/${this.subject}.json`)
      .pipe(map(item => item as Dictionary<T>));
  }
  public GetById(id: string): Observable<T> {
    return this.http.get(`${this.url}/${this.subject}/${id}.json`)
      .pipe(map(item => item as T));
  }
  public Create(body: T): Observable<any> {
    return this.http.post(`${this.url}/${this.subject}.json`, body);
  }
  public Delete(body: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.subject}.json`, body);
  }
  public Update(body: { Id: string } & T): Observable<any> {
    return this.http.put(`${this.url}/${this.subject}.json`, body);
  }
}