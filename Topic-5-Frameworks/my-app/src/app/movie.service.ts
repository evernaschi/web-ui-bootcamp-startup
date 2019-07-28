import { Injectable } from '@angular/core';
import { Movie, MovieList } from './movie';
import { initMovies } from './mock-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: MovieList[];

  constructor() { };
 
  initMovies() { 
    if (localStorage['already.started'] == 'true'){
      console.log('storage already started');
    } else {
      this.newStorage();
      localStorage['already.started'] = 'true';
      console.log('storage started for first time');
    }
  }

  newStorage() {
    console.log("initing movies");    
    let last_index: number = initMovies.length;
    let movies_ids: MovieList[] = [];
    for (var i = 0; i < last_index; i++) {
      localStorage['id.'+initMovies[i].id] = JSON.stringify(initMovies[i]);
      movies_ids.push({id: initMovies[i].id, title: initMovies[i].title});
    }
    localStorage['movies.ids'] = JSON.stringify(movies_ids);
  }

  getMovies() {
    console.log("getting movies");
    let movies_ids: MovieList[] = JSON.parse(localStorage['movies.ids']);
    let last_index: number = movies_ids.length;
    let new_movies : Movie[] = [];
    let j: number;
    for (var i = 0; i < last_index; i++) {
      j = movies_ids[i].id;
      new_movies.push(JSON.parse(localStorage['id.'+j]));
    }
    return movies_ids;
  }

  updateMovie(modified_movie) {
    let id = modified_movie.id;
    let new_title = modified_movie.title;
    let movies_ids: MovieList[] = JSON.parse(localStorage['movies.ids']);
    let new_movies_ids: MovieList[];
    let index: number;
    localStorage['id.'+id] = JSON.stringify(modified_movie);
    index = movies_ids.findIndex(x => { return (x.id == id) })
    movies_ids[index].title = new_title;
    localStorage['movies.ids'] = JSON.stringify(movies_ids);
    console.log(modified_movie);
  }

  delete(id) {
    let new_movies_ids: MovieList[];
    let old_movies_ids: MovieList[];
    old_movies_ids = JSON.parse(localStorage['movies.ids']);
    new_movies_ids = old_movies_ids.filter(x => { return (x.id != id) })
    localStorage['movies.ids'] = JSON.stringify(new_movies_ids);
    localStorage.removeItem('id.'+id);
  }

  getMovie(id) {
    let movie: Movie;
    movie = JSON.parse(localStorage['id.'+id]);
    return movie;
  }

  addMovie(title,year) {
    let movies_ids: MovieList[] = JSON.parse(localStorage['movies.ids']);
    let ids_list: number[] = movies_ids.map(x=>{ return x.id });
    let new_id: number = Math.max(...ids_list) + 1;
    let new_movie: Movie;
    movies_ids.push({id: new_id, title: title});
    localStorage['movies.ids'] = JSON.stringify(movies_ids);
    new_movie = { id: new_id, title: title, year: year };
    localStorage['id.'+new_id] = JSON.stringify(new_movie);
    console.log("adding movie"+title+new_id);

  }

}