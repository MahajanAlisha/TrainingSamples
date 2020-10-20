import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService<T, ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) { }

  getBaseURL() : string {
    return this._base;
  }

  create(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  read(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
  }

}