import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  pages:number;
  actual_page:number;

  ngOnInit() {
    this.bookService.clearBooks();
    this.actual_page = 0;
  }

  ngDoCheck() {
    this.pages = this.bookService.getPages();
    this.actual_page = this.bookService.getActualPage();
  }

  ngOnChange() {
    this.pages = this.bookService.getPages();
  }  

  async search(page?) {
    if (!page) { this.actual_page = 0; }
    if (page) { this.pages = await this.bookService.searchBooks(undefined,page); return this.pages;}
    let input = (<HTMLInputElement>document.getElementById('oc-search-input')).value;
    if (input.replace(/\s\s+/g, ' ') == ' ' || input == "") { return }
    input = input.replace(/\s\s+/g, ' ').replace(/\s/g, '+');
    this.pages = await this.bookService.searchBooks(input,page);
  }

  nextPage() {
    let ap = this.actual_page + 1;
    this.bookService.setActualPage(ap);
    this.search(ap);
  }

  previousPage() {
    let ap = this.actual_page - 1;
    this.bookService.setActualPage(ap);
    this.search(String(ap));
  }
}
