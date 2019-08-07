import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book;
  cover;
  book_saved: boolean;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.book_saved = false;
    this.getBook();
  }

  checkBookSaved() {
    let saved_books = this.bookService.getSavedBooks()
    if (saved_books.map(x => {return x.id}).includes(this.book.id)){
      return true;
    }
    return false;
  }

  async getBook() {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = await this.bookService.searchBook(id);
    this.cover = this.getLargeCover(this.book);
    this.formatDescription(this.book);
    return this.book;
  }

  formatDescription(book) {
    var html = book.volumeInfo.description;
    var div = document.createElement("div");
    div.innerHTML = html;
    book.volumeInfo.description = div.textContent || div.innerText || "";
  }


  getLargeCover(x) {
    if (!x.volumeInfo.hasOwnProperty("imageLinks")) { return "assets/img/image-not-available.png";}
    let small_cover = x.volumeInfo.imageLinks.thumbnail;
    let large_cover = "zoom=2";
    let large_cover_link = small_cover.split("&");
    large_cover_link[3] = large_cover;
    large_cover_link = large_cover_link.join("&");
    return large_cover_link;
  }
 
  async searchAuthor(author) {
    let input = ""
    input += "inauthor:"; 
    input += '"' + author.replace(/\s\s+/g, ' ').replace(/\s/g, '+') + '"';
    let pages = await this.bookService.searchBooks(input);
  }

  saveBook(b) {
    let title = b.volumeInfo.title;
    let id = b.id;
    let image = this.getLargeCover(b);
    let book:Book = {title, id, image}
    let succesfull = this.bookService.saveBook(book);
    if (succesfull) {
      this.book_saved = true;
    }
    console.log(this.book_saved)
  }
  
  displayAlert() {
    alert('Book already saved');
  }
}
