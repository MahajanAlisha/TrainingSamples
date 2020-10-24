import { dateFormatter } from './date-formatter';
import { IUserData, RoleType } from './i-user'

export const kInvalidIndex = -1;
export class UserRecord implements IUserData {
    // @dateFormatter()
    createdOn? : Date
    constructor(
        public id: number,
        public firstName: String,
        public email: String,
        public role: RoleType = RoleType.SUBSCRIBER,
        public middleName?: String,
        public lastName?: String,
        public phone?: Number,
        public address?: String,
        createdOn?: Date,
        public modifiedOn?: Date) {
            if(createdOn) {
                this.createdOn = createdOn;
            }
    }

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
        this.userList.push(new UserRecord(1, 'Alex', 'alex@gmail.com'));
        this.userList.push(new UserRecord(2, 'Steve', 'ssmith@gmail.com', RoleType.ADMIN, '', 'Smith', 9878987800, 'US', new Date(), new Date()));
    }

    get userList(): IUserData[] {
        return this._userList;
    }
}