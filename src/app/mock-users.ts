import { IUserData } from './i-user'

export const kInvalidIndex = -1;
export class UserRecord implements IUserData {
    constructor(
        public firstName: String,
        public email: String,
        public role: String = "Moderator",
        public middleName?: String,
        public lastName?: String,
        public phone?: Number,
        public address?: String,
        public createdOn?: Date,
        public modifiedOn?: Date) { }

    updateModificationDate(date?: Date) {
        if (date) {
            this.modifiedOn = date;
        }
        else {
            this.modifiedOn = new Date();
        }
    }
}

export class UserList {
    private _userList: IUserData[] = [];

    constructor() {
        this.buildUserList();
    }

    private buildUserList() {
        this.userList.push(new UserRecord('Alex', 'alex@gmail.com'));
        this.userList.push(new UserRecord('Steve', 'ssmith@gmail.com', 'Admin', '' ,'Smith', 9878987800, 'US', new Date(), new Date()));
    }

    get userList(): IUserData[] {
        return this._userList;
    }
}