import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopularAuthorsComponent } from './popular-authors/popular-authors.component';
import { LastSearchsComponent } from './last-searchs/last-searchs.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    BooksComponent,
    BookDetailsComponent,
    HomeComponent,
    AdvancedSearchComponent,
    NotFoundComponent,
    PopularAuthorsComponent,
    LastSearchsComponent,
    MyBooksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
