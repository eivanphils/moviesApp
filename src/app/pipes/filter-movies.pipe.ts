import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(movies: any[]): any[] {
    return movies.filter( movie => movie.backdrop_path);
  }

}
