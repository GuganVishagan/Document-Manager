"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = __importDefault(require("crypto"));
class User {
    constructor(userId, userName, password, email) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    getUser() {
        return this.userId;
    }
    getUsername() {
        return this.userName;
    }
    getEmail() {
        return this.email;
    }
    setPassword(password) {
        return crypto_1.default.createHash('sha256').update(password).digest('hex');
    }
    getPassword() {
        return this.password;
    }
}
exports.User = User;
