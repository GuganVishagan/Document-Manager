"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagerImpl = void 0;
const crypto_1 = __importDefault(require("crypto"));
class UserManagerImpl {
    constructor() {
        this.users = new Map();
    }
    ;
    userSignUp(user) {
        if (this.users.has(user.getEmail())) {
            console.log("User already exisits in the current system");
            return;
        }
        this.users.set(user.email, user);
        console.log("User registered successfully");
        return;
    }
    userLogin(email, password) {
        let userData = this.users.get(email);
        if (userData != null && ((crypto_1.default.createHash('sha256').update(userData.getPassword()).digest('hex')) == (crypto_1.default.createHash('sha256').update(password).digest('hex')))) {
            console.log("User Login successfull");
            return;
        }
        console.log("Invalid username/password");
        return;
    }
}
exports.UserManagerImpl = UserManagerImpl;
