import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class CoreFirebaseService<T, T_Create>{
    private readonly url = 'https://division-build-templates-default-rtdb.europe-west1.firebasedatabase.app';

    constructor(private http: HttpClient, private subject: string) { }

    public GetAll(): Observable<T[]> {
        return this.http.get(`${this.url}/${this.subject}.json`)
            .pipe(map((items: any) => {
                // console.log('Received from the GetAll call', items);
                return [];
            }));
    }

    public GetById(id: string): Observable<T> {
        return this.http.get(`${this.url}/${this.subject}/${id}.json`)
            .pipe(map(item => item as T));
    }

    public Create(body: T_Create): Observable<string> {
        return this.http.post(`${this.url}/${this.subject}.json`, body)
            .pipe(map((item: any) => item.name));
    }

    public Delete(body: any): Observable<any> {
        return this.http.delete(`${this.url}/${this.subject}.json`, body);
    }

    public Update(body: T): Observable<any> {
        return this.http.put(`${this.url}/${this.subject}.json`, body);
    }
}