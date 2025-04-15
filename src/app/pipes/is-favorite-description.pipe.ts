import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFavoriteDescription',
  standalone: false
})
export class IsFavoriteDescriptionPipe implements PipeTransform {

  transform(isFavorite: boolean): string {

    return isFavorite ? 'Sim' : 'Não';
  }

}
