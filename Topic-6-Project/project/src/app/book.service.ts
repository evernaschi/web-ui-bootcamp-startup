import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[];
  private url = "https://www.googleapis.com/books/v1/volumes";
  max_results = 15;
  pages:number;
  actual_page:number;
  last_search:string = "";
  max_last_search = 10;
  max_saved_books = 15;

  constructor() { };

  async searchBooks(input=undefined, page?) {
    let query = this.url+"?q="+input+"&maxResults="+this.max_results;
    if (page !== undefined) { 
      query = this.last_search + "&startIndex=" + page * 15;
      console.log(page)
    } else { 
      this.last_search = query; this.saveSearch(input.split('+').join(' '));
      this.actual_page = 0;
       }
    console.log(query);
    let response = await fetch(query);
    let data = await response.json();
    if (!data.hasOwnProperty("items")) {alert ("No books found");return 0};
    let new_books: Book[] = data.items.map(x=>{return {title: x.volumeInfo.title, image: this.getLargeCover(x), id: x.id }});
    this.books = new_books;
    this.pages = data.totalItems/this.max_results;
    return (data.totalItems/this.max_results);
  }

  clearBooks() {
    this.books = [];
    this.pages = 0;
  }

  getBooks() {
    return this.books;
  }

  async searchBook(id) {
    let response = await fetch(this.url+"/"+id);
    let data = await response.json();
    return data;  
  }

  getLargeCover(book) {
    if (!book.volumeInfo.hasOwnProperty("imageLinks")) { return "assets/img/image-not-available.png";}
    let small_cover = book.volumeInfo.imageLinks.thumbnail;
    let large_cover = "zoom=2";
    let large_cover_link = small_cover.split("&");
    large_cover_link[3] = large_cover;
    large_cover_link = large_cover_link.join("&");
    return large_cover_link;
  }

  getPages() {
    return this.pages;
  } 

  getActualPage() {
    return this.actual_page;
  }

  setActualPage(page) {
    this.actual_page = page;
  }

  async searchAuthor(author) {
    let query = ""
    query += "inauthor:"; 
    query += '"' + author.replace(/\s\s+/g, ' ').replace(/\s/g, '+') + '"';
    this.pages = await this.searchBooks(query);
  }

  saveSearch(last_search) {
    let last_search_list: string[] = [];    
    if (localStorage['last_search_list'] != undefined) {
      last_search_list = JSON.parse(localStorage['last_search_list']);
    }
    if(!last_search_list.includes(last_search)){last_search_list.push(last_search);}
    if (last_search_list.length > this.max_last_search) {
      last_search_list.shift();
    }
    localStorage['last_search_list'] = JSON.stringify(last_search_list);
  }

  getLastSearchs() {
    let last_search_list: string[] = [];    
    if (localStorage['last_search_list'] != undefined) {
      last_search_list = JSON.parse(localStorage['last_search_list']);
    }
    return last_search_list;
  }

  saveBook(book) {
    let my_books: Book[] = [];    
    if (localStorage['my_books'] != undefined) {
      my_books = JSON.parse(localStorage['my_books']);
    }
    if(!my_books.map(x => {return x.id}).includes(book.id)){
      my_books.push(book);
    } else { alert("Book already saved"); return false; }
    if (my_books.length > this.max_saved_books) {
      alert("You have reached the limit\n" + "Please, remove one book before adding another one");
      return false;
    }
    localStorage['my_books'] = JSON.stringify(my_books);
    return true;
  }

  getSavedBooks() {
    let my_books: Book[] = [];    
    if (localStorage['my_books'] != undefined) {
      my_books = JSON.parse(localStorage['my_books']);
    }
    return my_books;    
  }

  removeSavedBook(id) {
    let my_books: Book[] = [];    
    if (localStorage['my_books'] != undefined) {
      my_books = JSON.parse(localStorage['my_books']);
    }
    my_books = my_books.filter(x=> x.id !== id);
    localStorage['my_books'] = JSON.stringify(my_books);    
  }
}
