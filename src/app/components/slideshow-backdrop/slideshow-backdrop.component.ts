import { Pelicula } from './../../interfaces/iterfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
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
