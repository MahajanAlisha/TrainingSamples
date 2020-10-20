export enum RoleType {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN",
    SUBSCRIBER = "SUBSCRIBER"
};

export interface IUserData {
    id : number,
    firstName : String,
    middleName? : String,
    lastName? : String,
    email : String,
    phone? : Number,
    role : RoleType,
    address? : String,
    createdOn? : Date,
    modifiedOn? : Date
}