import { Movie } from '../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];

  public slideOpts: {} = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: 3.1,
    freeMode: true,
    spaceBetween: 1
  };

  constructor(protected modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentModal(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailMovieComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }
}
