import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/iterfaces';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() slideOpts: any;
  @Output() loadMovies: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.loadMovies.emit(true);
  }
}
