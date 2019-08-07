import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: BookDetailsComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'my-books', component: MyBooksComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
