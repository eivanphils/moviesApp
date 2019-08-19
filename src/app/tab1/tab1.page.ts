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
  public slideOpts: {} = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.1,
    freeMode: true 
  };

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    let peliculas = [
      {
        vote_count: 1,
        id: 1,
        video: true,
        vote_average: 1,
        title: 'mipelicula',
        popularity: 1,
        poster_path: 'asd',
        original_language: 'es',
        original_title: 'es',
        genre_ids: [1,2,3,4],
        backdrop_path?: null,
        adult: false,
        overview: 'asd',
        release_date: '2019-02-02'
      },
      {
        vote_count: 1,
        id: 1,
        video: true,
        vote_average: 1,
        title: 'mipelicula',
        popularity: 1,
        poster_path: 'asd',
        original_language: 'es',
        original_title: 'es',
        genre_ids: [1,2,3,4],
        backdrop_path?: null,
        adult: false,
        overview: 'asd',
        release_date: '2019-02-02'
      },
    ];

    this.peliculasRecientes = peliculas;
    /*this.moviesService.getFeactures().subscribe(
      (response) => {
        //this.peliculasRecientes = response.results;
      }
    );*/
  }
}
