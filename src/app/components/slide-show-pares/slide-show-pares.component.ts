import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/iterfaces';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Input() slideOpts: any;

  constructor() { }

  ngOnInit() {}

}
