import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  input;
  isbn_flag;
  fields = [ "keywords", "title", "author", "excluded_terms", "exact_phrase", "category" ];

  constructor(
    private bookService: BookService,
    private router: Router
    ) { }

  ngOnInit() {
    this.input = {};
    this.isbn_flag = false;
    this.input.language = 'all_languages';
    this.input.type = 'all_types';
  }

  advanced_search() {
    let old_input = this.input;
    let new_input = "";
    if (old_input.hasOwnProperty("isbn")) {this.bookService.searchBooks("isbn:"+old_input.isbn);this.router.navigateByUrl('/home');}
    if (old_input.hasOwnProperty("keywords")) { if(this.checkEmpty(old_input.keywords)){delete old_input.keywords;}else {new_input += "+" + this.format(old_input.keywords);} }
    if (old_input.hasOwnProperty("title")) { if(this.checkEmpty(old_input.title)){delete old_input.title;}else {new_input += "+" + "intitle:" + this.format(old_input.title);} }
    if (old_input.hasOwnProperty("author")) { if(this.checkEmpty(old_input.author)){delete old_input.author;}else {new_input += "+" + "inauthor:" + this.format(old_input.author);} }
    if (old_input.hasOwnProperty("excluded_terms")) { new_input += "-" + old_input.excluded_terms; }
    if (old_input.hasOwnProperty("exact_phrase")) { if(this.checkEmpty(old_input.exact_phrase)){delete old_input.exact_phrase;}else {new_input += "+" + '"' + this.format(old_input.exact_phrase) + '"';} }
    if (old_input.hasOwnProperty("category")) { if(this.checkEmpty(old_input.category)){delete old_input.category;}else {new_input += "+" + "subject:" + old_input.category;} }
    if (old_input.language !== 'all_languages') {new_input += "+langRestrict=" + old_input.language;}
    if (old_input.type !== 'all_types') {new_input += "+printType=" + old_input.type;}
    if (new_input.replace(/\s\s+/g, ' ') == ' ' || new_input == "") { alert("At least 1 field is required");return}
    if (new_input[0] === '&' || new_input[0] === '+') {new_input = new_input.substr(1)};
    this.bookService.searchBooks(new_input);
    this.router.navigateByUrl('/home');
  }

  format(input) {
    return (input.replace(/\s\s+/g, ' ').replace(/\s/g, '+'));
  }

  checkEmpty(input) {
  let new_input = input.replace(/\s\s+/g, ' ');
  return (new_input === ' ')
  }

  setISBNFlag() {
    let isbn_input = (<HTMLInputElement>document.getElementById("isbn")).value;
    this.input = {};
    if (isbn_input.length === 0) {
      this.isbn_flag = false;
    } else {
    this.isbn_flag = true;
    this.input.isbn = isbn_input;    
    }
  }

}
