import { Role } from "../modules/enum";

export interface payload {
    id:number;
    username: string;
    email: string;
    roles: Role[];
    iat?: Date;
}