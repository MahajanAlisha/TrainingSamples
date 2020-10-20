import { IUserData } from './i-user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserList } from './mock-users';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const userList = Object.assign([],  new UserList().userList);
    return {userList};
  }

  genId(userList: IUserData[]): number {
    return userList.length > 0 ? Math.max(...userList.map(user => user.id)) + 1 : 1;
  }
}