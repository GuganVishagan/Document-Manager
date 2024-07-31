import { Document } from "./Model/Document";
import { User } from "./Model/User";
import { DocumentManagerImpl } from "./Services/Impl/DocumentManagerImpl";
import { UserManagerImpl } from "./Services/Impl/UserManagerImpl";
import { DocumentManager } from "./Services/Manager/DocumentManager";
import { UserManager } from "./Services/Manager/UserManager";

export class DocumentApp {
    private documentManager: DocumentManager;
    private userManager: UserManager;

    constructor(){
        this.documentManager = new DocumentManagerImpl();
        this.userManager = new UserManagerImpl();
    }

    userSignUp(user : User) : void {
        return this.userManager.userSignUp(user);
    }
    userLogin(email: string, password: string) :void {
        return this.userManager.userLogin(email, password);
    }
    createDocument(document: Document) : void {
        this.documentManager.createDocument(document);
    }
    deleteDocument(documentId:number) :void {
        this.documentManager.deleteDocument(documentId);
    }
    getDocumentById(documentId:number): string {
        return this.documentManager.getDocumentById(documentId);
    }


}