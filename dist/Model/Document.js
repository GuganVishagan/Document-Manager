"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const DocumentStatus_1 = require("../Enum/DocumentStatus");
class Document {
    constructor(documentId, documentText, documentName, documentCreationDate, documentOwnerInfo, documentStatus = DocumentStatus_1.DocumentStatus.Active) {
        this.documentId = documentId;
        this.documentText = documentText;
        this.documentName = documentName;
        this.documentCreationDate = documentCreationDate;
        this.documentOwnerInfo = documentOwnerInfo;
        this.documentStatus = documentStatus;
    }
    getDocumentId() {
        return this.documentId;
    }
    getDocumentText() {
        return this.documentText;
    }
    getDocumentOwnerInfo() {
        return this.documentOwnerInfo;
    }
    getDocumentStatus() {
        return this.documentStatus;
    }
    getDocumentName() {
        return this.documentName;
    }
    setDocumentStatus(documentStatus) {
        this.documentStatus = documentStatus;
    }
}
exports.Document = Document;
