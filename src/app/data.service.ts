import { Injectable } from '@angular/core';
import { IUserData } from './i-user';
import { UserList } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userRecord : IUserData[] = [];

  constructor() {}

  loadUserData() {
    let userRecordList = new UserList();

    this.userRecord = Object.assign([],  userRecordList.userList);
    return this.userRecord;
  }
}
