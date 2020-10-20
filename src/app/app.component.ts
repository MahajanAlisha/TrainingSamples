import { kInvalidIndex } from './mock-users';
import { IUserData } from './i-user';
import { DataService } from './data.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUserData[] = [];
  dataLoaded = false;
  loadDataBtnTitle: String;
  selected: number;
  selectedUser: IUserData;

  constructor(private dataService: DataService,
    public datepipe: DatePipe) 
  {
    this.updateLoadBtnTitle();
  }

  loadData() {
    if (!this.dataLoaded) {
      this.dataLoaded = true;
      this.updateLoadBtnTitle();
    }
    this.dataService.getUserList().subscribe(
      users => this.users = users
    );
  }

  updateLoadBtnTitle() {
    this.loadDataBtnTitle = (this.dataLoaded ? "Refresh data" : "Load data");
  }

  editUser(i: number) {
    this.selected = i;
    this.selectedUser = Object.assign([], this.users[i]);
  }

  save() {
    this.users[this.selected] = Object.assign([], this.selectedUser);
    this.revertUserDetails();
  }

  revertUserDetails() {
    this.selected = kInvalidIndex;
    this.selectedUser = undefined;
  }

  delete(i: number) {
    this.users.splice(i, 1);
  }
}
