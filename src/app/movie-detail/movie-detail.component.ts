import { Component, OnInit } from '@angular/core';
import {Movie} from '../interfaces/movie'
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

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
    cover: ''
  };
  movie:Movie[]=[];
  id:any;
  editing: boolean;
  constructor (private moviesService: MoviesService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.moviesService.getMovies().subscribe((data:Movie[])=>{
        this.movie = data;
        const foundMovie = this.movie.find((m) => {return m.id == this.id});
        if (foundMovie) {
          this.movieid = foundMovie;
        }else {
          console.error(`Usuario with id ${this.id} not found.`);
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
      alert('Usuario Actualizado');
      console.log(data);
      this.router.navigate(['/movies'])
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  deletem(id:any){
    if (confirm ("Seguro que deseas eliminar este usuario?")){
      this.moviesService.delete(id).subscribe((data) => {
        alert("Eliminado con exito!");
        console.log(data);
        this.router.navigate(['/movies'])
      }, error => {
        console.log(error);
      });
    }
  }
}