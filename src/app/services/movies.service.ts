import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseMB, MovieDetail, ResponseCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

const url = environment.urlApi;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private popularPages = 0;

  private executeQuery<T>(query: string) {
    query = url + query;

    query += `api_key=${apiKey}&language=es&include_image_language=es`;

    return this.http.get<T>(query);
  }

  constructor(
    private http: HttpClient,
    private storage: Storage,
    protected toastCtrl: ToastController
  ) { }

  getFeactures() {
    const from = moment('2012-10-01').format('YYYY-MM-DD'); // 7 years ago    ;
    const to = moment().format('YYYY-MM-DD');
    return this.executeQuery<ResponseMB>(`discover/movie?primary_release_date.gte=${from}&primary_release_date.lte=${to}&`);
  }

  getPopulars(sort: string = 'desc') {
    this.popularPages++;
    const query = `discover/movie?sort_by=popularity.${sort}&page=${this.popularPages}&`;
    return this.executeQuery<ResponseMB>(query);
  }

  getMovieDetail(movieId: string) {
    return this.executeQuery<MovieDetail>(`movie/${movieId}?`);
  }

  getCreditsFromMovie(movieId: string) {
    return this.executeQuery<ResponseCredits>(`movie/${movieId}/credits?`);
  }

  searchMovie(query: string) {
    return this.executeQuery<ResponseMB>(`search/movie?query=${query}&`);
  }
}
