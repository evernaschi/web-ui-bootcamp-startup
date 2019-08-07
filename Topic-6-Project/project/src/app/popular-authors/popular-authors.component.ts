import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-popular-authors',
  templateUrl: './popular-authors.component.html',
  styleUrls: ['./popular-authors.component.css']
})
export class PopularAuthorsComponent implements OnInit {
  authors = [ "Stephen King", "J. K. Rowling", "J. R. R. Tolkien", "Mark Twain", "George Orwell", "Agatha Christie", "C. S. Lewis", "Arthur Conan Doyle" ];

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  searchAuthor(author) {
    this.bookService.searchAuthor(author);
  }
}
