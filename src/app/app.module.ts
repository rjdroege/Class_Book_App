import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookComponent } from './shared/book/book.component';
import { DropdownDirective } from './shared/Directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BookResultsComponent,
    BookSearchComponent,
    BookListComponent,
    BookDetailsComponent,
    NavigationComponent,
    BookComponent,
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    NotificationComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
