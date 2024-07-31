import { DocumentStatus } from "../../Enum/DocumentStatus";
import { Document } from "../../Model/Document";
import { DocumentManager } from "../Manager/DocumentManager";

export class DocumentManagerImpl implements DocumentManager{
    private documentById : Map<number, Document> = new Map();

    constructor(){
    }

    createDocument(document: Document): void {
       this.documentById.set(document.getDocumentId(), document);
       console.log("Document Created Successfully!");
    }

    deleteDocument(documentId: number): void {
        let document = this.documentById.get(documentId);
        if(document !=undefined && this.documentById.has(documentId) ){
           document?.setDocumentStatus(DocumentStatus.Deleted);
           this.documentById.set(documentId, document);
           console.log("Document Deleted Successfully!")
           return;
        }
        console.log("Document Not Found!");
    }

    getDocumentById(documentId: number): string {
        let document = this.documentById.get(documentId);
        if(document!= undefined && document.getDocumentStatus()== DocumentStatus.Active){
            console.log(document.getDocumentText() + "Document Fetched Successfully!");
            return document.getDocumentText();
        }
        console.log("Document Does Not Exist!");
        return "Document Does Not Exist!";
    }

}