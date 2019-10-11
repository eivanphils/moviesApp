import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { FilterMoviesPipe } from './filter-movies.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    FilterMoviesPipe],
  exports: [
    ImagenPipe,
    FilterMoviesPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
