import { Genre } from './../interfaces/interfaces';
import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MoviesService } from '../services/movies.service';
import { MovieDetail } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  moviesByGeners: any[] = [];
  genres: Genre[] = [];
  movies: MovieDetail[] = [];

  constructor(
    protected storageService: StorageService,
    protected movieService: MoviesService
  ) {
    console.log(this.movieService.geners);
  }

  async ionViewDidEnter() {
    this.genres = await this.movieService.getGenders();
    this.movies = await this.storageService.loadMovies();

    this.getMoviesByGener(this.genres , this.movies);
  }

  getMoviesByGener(genres: Genre[], movies: MovieDetail[]) {
    this.moviesByGeners = [];

    genres.forEach((genre) => {
      this.moviesByGeners.push({
        genre: genre.name,
        movies: movies.filter( movie => {
          return movie.genres.find( genreD => genreD.id === genre.id)})
      });
    });
  }
}
