import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';
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
      console.error('Error al cargar las películas', error); // Manejo de errores
    });
  }

  deletem(id:any){
    if (confirm ("Seguro que deseas eliminar esta pelicula?")){
      this.moviesService.delete(id).subscribe((data) => {
        alert("Eliminado con exito!");
        console.log(data);
        this.loadMovies();
      }, error => {
        console.log(error);
      });
    }
  }
}
