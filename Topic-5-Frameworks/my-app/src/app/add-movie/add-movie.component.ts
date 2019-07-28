import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie, MovieList } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  async add(title, year) {
    if (title == "") {alert("Title field is required");return}
    if (year == "") {alert("Year field is required");return}
    if (isNaN(Number(year)) || Number(year) < 1870 || Number(year) > 2050) {alert("Invalid year input");return}
    await this.movieService.addMovie(title, year);
    this.goBack();
  }
}