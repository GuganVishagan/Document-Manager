import crypto from 'crypto';

export class User {
    public userId: number;
    public userName: string;
    public password: string;
    public email: string;
    
    constructor(userId: number, userName: string, password: string, email: string){
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }

    getUser(){
        return this.userId;
    }

    getUsername(){
        return this.userName;
    }

    getEmail(){
        return this.email
    }

    setPassword(password:string){
        return crypto.createHash('sha256').update(password).digest('hex');
    }

    getPassword(){
        return this.password;
    }
}