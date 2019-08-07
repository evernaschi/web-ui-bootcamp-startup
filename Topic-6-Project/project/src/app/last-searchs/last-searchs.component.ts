import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-last-searchs',
  templateUrl: './last-searchs.component.html',
  styleUrls: ['./last-searchs.component.css']
})
export class LastSearchsComponent implements OnInit {
  last_search_list:string[];
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.last_search_list = this.bookService.getLastSearchs();
  }

  ngDoCheck() {
    this.last_search_list = this.bookService.getLastSearchs();
  }

  searchBooks(input) {
    this.bookService.searchBooks(input.split(' ').join('+'));
  }

}
