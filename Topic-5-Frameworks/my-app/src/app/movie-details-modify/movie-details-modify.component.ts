import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie, MovieList } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details-modify',
  templateUrl: './movie-details-modify.component.html',
  styleUrls: ['./movie-details-modify.component.css']
})
export class MovieDetailsModifyComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovie(id);
  }

  goBack(): void {
    this.location.back();
  }

  async save() {
    let {title, year} = this.movie;
    if (title == "") {alert("Title field is required");return}
    if (String(year) == "") {alert("Year field is required");return}
    if (isNaN(Number(year)) || Number(year) < 1870 || Number(year) > 2050) {alert("Invalid year input");return}
    
    await this.movieService.updateMovie(this.movie);
    this.goBack();
  }
}