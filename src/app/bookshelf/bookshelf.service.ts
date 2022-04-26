import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  private myBooks: Book[] = [
    new Book(
      "Test Book One",
      "Ryan Droege",
      "Self-Help",
      "https://source.unsplash.com/50x50/?book"
    ),
    new Book(
      "Test Book Two",
      "Ryan Droege",
      "Self-Help",
      "https://source.unsplash.com/50x50/?book"
    ),
    new Book(
      "Test Book Three",
      "Ryan Droege",
      "Self-Help",
      "https://source.unsplash.com/50x50/?book"
    )
  ]

  getBooks(){
   return this.myBooks.slice();
  }

  getBook(idx: number){
    return this.myBooks.slice()[idx]
  }

  addBook(newBook: Book){
    this.myBooks.push(newBook);
    this.bookListChanged.next(this.myBooks.slice());
  }

  updateBook(idx: number, updatedBook: Book){
    this.myBooks[idx] = updatedBook;
    this.bookListChanged.next(this.myBooks.slice());
  }

  saveBook(book: Book){
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
  }

  removeBook(idx: number){
    if (idx !== -1){
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }

  }
}
