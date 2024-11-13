import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie'
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})

export class MovieDetailComponent implements OnInit {
  movieid:Movie={
    title: '',
    synopsis: '',
    year: 0,
    cover: 0
  };
  movie:Movie[]=[];
  id:any;
  editing: boolean;
  constructor (private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.moviesService.getMovies().subscribe((data:Movie[])=>{
        this.movie = data;
        const foundMovie = this.movie.find((m) => {return m.id == this.id});
        if (foundMovie) {
          this.movieid = foundMovie;
        }else {
          console.error(`Movie with id ${this.id} not found.`);
        }
      }, (error) => {
      console.log(error);
    });
    }
    else{
      this.editing = false;
    }
  }

  ngOnInit(){
  }

  updateMovie(){
    this.moviesService.put(this.movieid).subscribe((data)=>{
      alert('Pelicula guardada');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }
}