import { UUID } from "crypto";
import { User } from "./User";
import { DocumentStatus } from "../Enum/DocumentStatus";

export class Document { 

    constructor(
        public documentId: number,
        public documentText: string,
        public documentName: string,
        public documentCreationDate: Date,
        public documentOwnerInfo: User,
        public documentStatus: DocumentStatus = DocumentStatus.Active
    ) {}

    getDocumentId(){
        return this.documentId;
    }

    getDocumentText(){
        return this.documentText;
    }

    getDocumentOwnerInfo(){
        return this.documentOwnerInfo;
    }

    getDocumentStatus(){
        return this.documentStatus;
    }

    getDocumentName(){
        return this.documentName;
    }

    setDocumentStatus(documentStatus : DocumentStatus){
        this.documentStatus = documentStatus;
    }

   
}