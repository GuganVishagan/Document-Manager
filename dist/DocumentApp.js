"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentApp = void 0;
const DocumentManagerImpl_1 = require("./Services/Impl/DocumentManagerImpl");
const UserManagerImpl_1 = require("./Services/Impl/UserManagerImpl");
class DocumentApp {
    constructor() {
        this.documentManager = new DocumentManagerImpl_1.DocumentManagerImpl();
        this.userManager = new UserManagerImpl_1.UserManagerImpl();
    }
    userSignUp(user) {
        return this.userManager.userSignUp(user);
    }
    userLogin(email, password) {
        return this.userManager.userLogin(email, password);
    }
    createDocument(document) {
        this.documentManager.createDocument(document);
    }
    deleteDocument(documentId) {
        this.documentManager.deleteDocument(documentId);
    }
    getDocumentById(documentId) {
        return this.documentManager.getDocumentById(documentId);
    }
}
exports.DocumentApp = DocumentApp;
