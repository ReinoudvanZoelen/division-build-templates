import * as Papa from 'papaparse';
import { BehaviorSubject, Observable } from 'rxjs';

export default abstract class BaseCSVDataService<T> {
    abstract urlPart: string;
    abstract parse(data: unknown): T;

    private lockDataFetching = false;
    public data$ = new BehaviorSubject<T[]>([]);

    public GetData(): BehaviorSubject<T[]> {
        if (this.lockDataFetching) {
            return this.data$;
        };

        this.lockDataFetching = true;
        const filePath = 'https://raw.githubusercontent.com/mxswat/mx-division-builds/master/public/csv/' + this.urlPart + '.csv';

        Papa.parse(filePath, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.errors && results.errors.length > 0) {
                    console.error(results.errors);
                } else {
                    const data = results.data.map(rawData => this.parse(rawData));
                    this.data$.next(data);
                }
            }
        });

        return this.data$;
    }


    public GetDataAsync(): Observable<T[]> {
        const filePath = 'https://raw.githubusercontent.com/mxswat/mx-division-builds/master/public/csv/' + this.urlPart + '.csv';

        return new Observable(observable => Papa.parse(filePath, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.errors && results.errors.length > 0) {
                    console.error(results.errors);
                } else {
                    const data = results.data.map(rawData => this.parse(rawData));
                    observable.next(data);
                }
            }
        }));
    }

    public Invalidate() {
        this.lockDataFetching = false;
        this.data$.next([]);
        this.GetData();
    }
}