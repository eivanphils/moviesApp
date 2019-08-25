import { Movie } from '../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Movie[] = [];

  public slideOpts: {} = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.1,
    freeMode: true
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
