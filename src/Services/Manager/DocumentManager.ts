import { Document } from "../../Model/Document";

export interface DocumentManager {
    createDocument(document: Document) : void;
    deleteDocument(documentId: number) : void;
    getDocumentById(documentId: number) : string;
}