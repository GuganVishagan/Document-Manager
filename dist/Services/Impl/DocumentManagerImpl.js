"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentManagerImpl = void 0;
const DocumentStatus_1 = require("../../Enum/DocumentStatus");
class DocumentManagerImpl {
    constructor() {
        this.documentById = new Map();
    }
    createDocument(document) {
        this.documentById.set(document.getDocumentId(), document);
        console.log("Document Created Successfully!");
    }
    deleteDocument(documentId) {
        let document = this.documentById.get(documentId);
        if (document != undefined && this.documentById.has(documentId)) {
            document === null || document === void 0 ? void 0 : document.setDocumentStatus(DocumentStatus_1.DocumentStatus.Deleted);
            this.documentById.set(documentId, document);
            console.log("Document Deleted Successfully!");
            return;
        }
        console.log("Document Not Found!");
    }
    getDocumentById(documentId) {
        let document = this.documentById.get(documentId);
        if (document != undefined && document.getDocumentStatus() == DocumentStatus_1.DocumentStatus.Active) {
            console.log(document.getDocumentText() + "Document Fetched Successfully!");
            return document.getDocumentText();
        }
        console.log("Document Does Not Exist!");
        return "Document Does Not Exist!";
    }
}
exports.DocumentManagerImpl = DocumentManagerImpl;
