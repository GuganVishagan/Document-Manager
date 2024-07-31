import { User } from "../../Model/User";
import { UserManager } from "../Manager/UserManager";
import crypto from 'crypto';

export class UserManagerImpl implements UserManager {
    private users: Map<string, User> = new Map();
 
    constructor(){};


    userSignUp(user : User){
        if(this.users.has(user.getEmail())){
            console.log("User already exisits in the current system");
            return;
        }
        this.users.set(user.email, user);
        console.log("User registered successfully");
        return;
    }

    userLogin(email: string, password: string){
        let userData: User | undefined = this.users.get(email);
        if(userData!= null && ((crypto.createHash('sha256').update(userData.getPassword()).digest('hex')) == (crypto.createHash('sha256').update(password).digest('hex'))))
        {
            console.log("User Login successfull");
            return;
        }
        console.log("Invalid username/password");
        return;
    }
}