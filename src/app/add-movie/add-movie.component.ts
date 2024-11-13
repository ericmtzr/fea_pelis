import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie'
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {
  movie:Movie={
    title: '',
    synopsis: '',
    year: 0,
    cover: 0
  };
  constructor (private moviesService: MoviesService) { }

  ngOnInit(){
  }

  saveMovie(){
    this.moviesService.save(this.movie).subscribe((data)=>{
      alert('Pelicula guardada');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }
}