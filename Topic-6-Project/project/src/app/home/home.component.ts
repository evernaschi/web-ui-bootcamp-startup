import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[];
  default_top_margin = '30vh';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();    
    this.setTransition();
  }

  ngDoCheck() {
    this.books = this.bookService.getBooks();
    this.setTransition();
  }

  ngAfterViewInit() {
    this.books = this.bookService.getBooks();
    this.setTransition();
  }

  setTransition() {
    let b = this.books;
    let center = document.getElementById("center");
    if (b !== undefined && b.length > 0){
      center.style.marginTop = '0';
    } else {
      center.style.marginTop = this.default_top_margin;  
    }
  }

}
