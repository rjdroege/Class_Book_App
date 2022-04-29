import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: 'root',
})

export class LibraryService {

  constructor(private http: HttpClient){}

bookListChanged = new EventEmitter<Book[]>();
  private allBooks: Book[] = [ ]

  getBooks(){
    return this.allBooks.slice();
  }

  fetchBooks(searchText: string){
    const formattedQuery = searchText.split(' ').join('+').toLowerCase();
    this.http.get(`http://openlibrary.org/search.json?q=${formattedQuery}`
    ).subscribe((searchResults) => {
      this.allBooks = [];
      this.saveBooks(searchResults);
    });

  }

  saveBooks(books) {
    books.docs.map((book) => {
      console.log(book);
      const { title, author_name, first_publish_year, isbn } = book;
      const newBook = new Book(
        title,
        author_name ? author_name[0] : 'unknown',
        '',
        '',
        0,
        first_publish_year,
        isbn ? isbn[0] : 'unknown'
      );
      console.log(newBook);
      this.allBooks.push(newBook);
      console.log(this.allBooks);
    })
    this.bookListChanged.next(this.allBooks.slice());
  }

}


