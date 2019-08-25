import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public recentMovies: Movie[] = [];
  public popularMovies: Movie[] = [];
  public slideOpts: {} = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 3.1,
    freeMode: true,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 1
  };

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovies();
    this.getPopularMovies();
  }

  getMovies() {
    this.moviesService.getFeactures().subscribe(
      (response) => {
        this.recentMovies = response.results;
      }
    );
  }

  getPopularMovies() {
    this.moviesService.getPopulars('desc').subscribe(
      (response) => {
        this.popularMovies.push(...response.results);
      }
    );
  }
}
