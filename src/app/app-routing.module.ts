import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';  
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'add', component: AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
