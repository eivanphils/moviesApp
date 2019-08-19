import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/iterfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getFeactures() {
    // tslint:disable-next-line: max-line-length
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?api_key=da667a4fafb64048d77c2deeecb0ed26&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&language=es');
  }
}
