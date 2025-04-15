import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genreDescription',
  standalone: false
})
export class GenreDescriptionPipe implements PipeTransform {

  constructor(
    private readonly _genresService: GenresService
  ) { }

  transform(genreId: number): string {
    const genre = this._genresService.getGenreDescription(genreId);
    return genre ? genre : '';
  }

}
