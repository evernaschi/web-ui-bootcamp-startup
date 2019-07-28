import { Component, OnInit } from '@angular/core';
import { Movie, MovieList } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: MovieList [];

  constructor(private movieService: MovieService) {
  }
  ngOnInit() {
    this.movieService.initMovies()
    this.movies = this.movieService.getMovies();
  }

  delete(movie){
    this.movieService.delete(movie.id);
    this.movies = this.movieService.getMovies();
  }

  clearStorage(){
    localStorage.clear();
    this.movieService.initMovies()
    this.movies = this.movieService.getMovies();    
    console.log('Storage Cleaned')
  }

}