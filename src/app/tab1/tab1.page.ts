import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/iterfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public peliculasRecientes: Pelicula[] = [];
  public peliculasPopulares: Pelicula[] = [];

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovies();
    this.getPopulares();
  }

  getMovies() {
    this.moviesService.getFeactures().subscribe(
      (response) => {
        this.peliculasRecientes = response.results;
      }
    );
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe(
      (response) => {
        this.peliculasPopulares = response.results;
      }
    );
  }
}
