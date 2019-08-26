import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../components/detail-movie/detail-movie.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public query: string;
  public suggestedMovies: Movie[];
  public movies: Movie[];
  public loading: boolean = false;

  constructor(protected moviesService: MoviesService,
              protected modalCtrl: ModalController) {}

  ngOnInit() {
    this.getPopularsMovies();
  }

  onSearchChange(event: any) {
    this.loading = true;
    const query = event.detail.value;

    if (query === '') {
      this.movies = null;
      this.loading = false;
    } else {
      this.searchMovie(query);
    }
  }

  searchMovie(query: string) {
    this.moviesService.searchMovie(query).subscribe(
      (response) => {
        this.movies = response.results;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  selectSuggest(value) {
    this.query = value;
  }

  getPopularsMovies() {
    this.moviesService.getPopulars().subscribe(
      (response) => {
        this.suggestedMovies = response.results;
      }
    );
  }

  async showDetail(id) {
    const modal = await this.modalCtrl.create({
      component: DetailMovieComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }
}
