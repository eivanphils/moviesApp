import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/iterfaces';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

const url = environment.urlApi;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private ejecutarQuery<T>(query: string) {
    query = url + query;

    query += `&api_key=${apiKey}&language=es&include_image_language=es`;

    return this.http.get<T>(query);
  }

  constructor(
    private http: HttpClient
  ) { }

  getFeactures() {
    const from = moment('2012-10-01').format('YYYY-MM-DD'); // 7 years ago    ;
    const to = moment().format('YYYY-MM-DD');
    return this.ejecutarQuery<RespuestaMDB>(`discover/movie?primary_release_date.gte=${from}&primary_release_date.lte=${to}`);
  }
}
