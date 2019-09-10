import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public movies: MovieDetail[] = [];

  constructor(
    protected toastCtrl: ToastController,
    protected storage: Storage
  ) {
    this.loadMovies();
   }

  saveFavoriteMovie(movie: MovieDetail) {
    const exist = this.movies.find(item => item.id === movie.id);

    if(!exist) {
      this.movies.unshift(movie);
      this.storage.set('favoritos', this.movies);
      this.presentToast('primary', 'Pelicula guardada en favoritos');
    } else {
      this.deleteFavoriteMovie(movie.id);
    }
  }

  deleteFavoriteMovie(movieId: number) {
    this.movies = this.movies.filter(movie => movie.id !== movieId);
    this.storage.set('favoritos', this.movies);
    this.presentToast('primary', 'Pelicula eliminada de favoritos');
  }

  loadMovies() {

  }

  movieExis(id: number) {

  }

  async presentToast(color: string, message: string) {
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }
}
