import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { IUserData } from './i-user';
import {GenericCrudService} from './generic-crud.service'

@Injectable({
  providedIn: 'root'
})

export class DataService extends GenericCrudService<IUserData, number> {
  private userListURL = 'api/userList';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
      super(http, 'api/userList');
  }

  getUserList(): Observable<IUserData[]> {
    return this.http.get<IUserData[]>(this.userListURL);
  }

}
