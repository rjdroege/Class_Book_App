import { Component, Input, OnDestroy, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnDestroy {
  bookListSub: Subscription;
  @Input() book: Book;
  myBooks: Book[] = [];
    constructor(private bookshelfService: BookshelfService,
      private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();
    this.bookListSub = this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
      this.myBooks = books;
    })

  }

  onNewBook(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onRemoveBook(idx){
    this.bookshelfService.removeBook(idx);
  }

  ngOnDestroy(): void {
      this.bookListSub.unsubscribe();
  }


}
