import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable()
export class SdaHttpClient {
    constructor(private dbService: NgxIndexedDBService) { }

    post<T>(url: string, data: T): Observable<T> {
        return this.dbService.add(url, data);
    }

    put<T>(url: string, id: number, data: T) {
        return this.dbService.update(url, data, id);
    }

    getAll<T>(url: string): Observable<Array<T>> {
        return this.dbService.getAll(url);
    }

    getById<T>(url: string, id: number): Observable<T> {
        return this.dbService.getByID(url, id.toString());
    }

    delete(url: string, id: number): Observable<boolean> {
        return this.dbService.deleteByKey(url, id);
    }
}
