import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Movie} from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private apiUrl = 'http://localhost:8000/api' + '/allmovies'; // URL de la API
  private moviesUrl = 'http://localhost:8000/api' + '/postmovie'; // URL de la API
  private movieUrl = 'http://localhost:8000/api' + '/updatemovie/'; // URL de la API
  private moviedUrl = 'http://localhost:8000/api' + '/deletemovie/'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método GET para obtener todas las películas
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  save(movie:Movie){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.moviesUrl,movie,{headers:headers});
  }

  put(movie:Movie){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.movieUrl + movie.id,movie,{headers:headers});
  }

  delete(id:any){
    return this.http.delete<Movie[]>(this.moviedUrl + id);
  }
}