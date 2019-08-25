import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, ResponseCredits } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

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
  public actorOptionsCard: any =  {
    initialSlide: 1,
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(
    protected movieService: MoviesService,
    protected modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('id', this.id);
    this.getMovieDetail();
    this.getCreditsFromMovie();
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

  favorite() {

  }

}
