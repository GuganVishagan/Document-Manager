import { DocumentApp } from "./DocumentApp";
import { Document } from "./Model/Document";
import { User } from "./Model/User";

const documentApp = new DocumentApp();


//User Registration
let user1 = new User (1, "Vishal", "password@123","vishal@gmail.com");
let user2 = new User(2, "Suhail", "password@321","suhail@gmail.com");

documentApp.userSignUp(user1);
documentApp.userSignUp(user2);

//User Login
documentApp.userLogin("vishal@gmail.com","password@123");
documentApp.userLogin("vishal@gmail.com","password@123");

let document1 = new Document(1, "Sample doc text of Doc1", "Doc1", new Date(), user1);
let document2 = new Document(2, "Sample doc text of Doc2", "Doc2", new Date(), user2);
documentApp.createDocument(document1);
documentApp.createDocument(document2);

documentApp.deleteDocument(1);
documentApp.getDocumentById(1);



