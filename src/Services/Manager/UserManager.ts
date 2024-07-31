import { User } from "../../Model/User";

export interface UserManager {

userSignUp(user : User): void;
userLogin(email:string, password:string): void;
}