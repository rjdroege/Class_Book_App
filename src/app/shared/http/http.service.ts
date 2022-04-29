import { Injectable } from "@angular/core";
import { BookshelfService } from "src/app/bookshelf/bookshelf.service";
import { HttpClient } from "@angular/common/http";
import { Book } from "../book/book.model";

@Injectable({providedIn: 'root'})
export class HTTPService {

  firebaseRouteURL = 'https://ng-class-book-app-default-rtdb.firebaseio.com/books.json';

  constructor(private http: HttpClient, private bookshelfService: BookshelfService) {}

saveBooksToFirebase(){
  const books = this.bookshelfService.getBooks();
  this.http.put(this.firebaseRouteURL, books).subscribe((res) => {
    console.log(res);
  })
}

fetchBooksFromFirebase(){
return this.http.get(this.firebaseRouteURL, {}
  ).subscribe((res: Book[] | []) => {
    this.bookshelfService.setBooks(res);
  });
}


}
