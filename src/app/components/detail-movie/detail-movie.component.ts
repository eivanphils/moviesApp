import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, ResponseCredits, } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  @Input() id: string;

  public movieDetail: MovieDetail = {};
  public creditsMovie: ResponseCredits = {};
  public hide = 150;
  public exist = false;
  public actorOptionsCard: any =  {
    initialSlide: 1,
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(
    protected movieService: MoviesService,
    protected storageService: StorageService,
    protected modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    this.getMovieDetail();
    this.getCreditsFromMovie();
    this.exist = await this.storageService.movieExis(this.id);
  }

  getMovieDetail() {
    this.movieService.getMovieDetail(this.id).subscribe(
      (response) => {
        this.movieDetail = response;
      }
    );
  }

  getCreditsFromMovie() {
    this.movieService.getCreditsFromMovie(this.id).subscribe(
      (response) => {
        this.creditsMovie = response;
      }
    );
  }

  backHome() {
    this.modalCtrl.dismiss();
  }

  saveFavorite(movie: MovieDetail) {
    this.exist = !this.exist;
    this.storageService.saveFavoriteMovie(movie);
  }

}
