import { Pelicula } from './../../interfaces/iterfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  public slideOpts: {} = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor() { }

  ngOnInit() {}

}
