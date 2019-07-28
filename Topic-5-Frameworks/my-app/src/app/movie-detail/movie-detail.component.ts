import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie, MovieList } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: [ './movie-detail.component.css' ]
})
export class MovieDetailComponent implements OnInit {
  @Input() id: number; 
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
    let id = +this.route.snapshot.paramMap.get('id');;
    if (this.id != undefined){ id = this.id; }
    this.movie = this.movieService.getMovie(id);
    console.log("getting movie "+id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.movieService.updateMovie(this.movie);
  }
}