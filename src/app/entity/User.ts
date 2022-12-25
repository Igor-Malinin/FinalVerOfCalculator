import {UserStatus} from "./UserStatus";

export class User {
    id: number
    status: UserStatus
    groupOfUsers: any
    surname: string
    name: string
    patronymic: string
    telephoneNumber: number
    email: string
    login: string
    password: string
}