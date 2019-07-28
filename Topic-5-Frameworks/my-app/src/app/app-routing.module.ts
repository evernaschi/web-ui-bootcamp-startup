import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component'; 
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailsModifyComponent } from './movie-details-modify/movie-details-modify.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'detail/:id/modify', component: MovieDetailsModifyComponent },
  { path: 'add-movie', component: AddMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
