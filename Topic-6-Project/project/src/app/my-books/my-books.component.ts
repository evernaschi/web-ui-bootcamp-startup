import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  my_books;
  column_num = 5;
  row_num = 3;
    
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.my_books = this.bookService.getSavedBooks();
  }
  
  ngDoCheck() {
    this.my_books = this.bookService.getSavedBooks();
  }

  removeBook(id) {
    this.bookService.removeSavedBook(id);
  }
}
