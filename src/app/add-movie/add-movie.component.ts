import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie'
import { MoviesService } from '../services/movies.service';
import {Router} from '@angular/router'

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
    cover: ''
  };
  constructor (private moviesService: MoviesService, private router: Router) { }

  ngOnInit(){
  }

  saveMovie(){
    this.moviesService.save(this.movie).subscribe((data)=>{
      alert('Usuario guardado');
      console.log(data);
      this.router.navigate(['/movies'])
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }
}