import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() slideOpts: any;
  @Output() loadMovies: EventEmitter<boolean> = new EventEmitter();

  constructor(protected modalCtrl: ModalController) { }

  ngOnInit() {}

  loadMoreMovies() {
    this.loadMovies.emit(true);
  }

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
