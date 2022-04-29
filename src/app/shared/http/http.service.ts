import { Injectable } from "@angular/core";
import { BookshelfService } from "src/app/bookshelf/bookshelf.service";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HTTPService {

  firebaseRouteURL = '';

  constructor(private http: HttpClient, private bookshelfService: BookshelfService) {}

saveBooksToFirebase(){

}

fetchBooksFromFirebase(){

}


}
