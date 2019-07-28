import { Component, OnInit } from '@angular/core';

import { Movie, MovieList } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  last_movie_id: number;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getLastMovie();
  }

  getLastMovie() {
    const movies_list = this.movieService.getMovies();
    this.last_movie_id = movies_list[movies_list.length-1].id;
  }

}
