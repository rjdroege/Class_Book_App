import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root',
})

export class LibraryService {
bookListChanged = new EventEmitter<Book[]>();
  private allBooks: Book[] = [
    new Book(
      "Book of Testing",
      "Ryan Droege",
      "Coding",
      "https://source.unsplash.com/50x50/?book"
    ),
    new Book(
      "New Book of Testing",
      "Ryan Droege",
      "Coding+",
      "https://source.unsplash.com/50x50/?book"
    )
  ]

  getBooks(){
    return this.allBooks.slice();
  }

}


