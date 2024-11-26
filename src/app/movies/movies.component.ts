import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Movie} from '../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

export class MoviesComponent implements OnInit {
  movies: Movie[] = []; // Inicializa el array de películas

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.loadMovies(); // Cargar las películas al inicializar el componente
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data; // Asignar los datos obtenidos al array de películas
    }, error => {
      console.error('Error al cargar los usuarios', error); // Manejo de errores
    });
  }
}
