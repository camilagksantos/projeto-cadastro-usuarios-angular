import { Pipe, PipeTransform } from '@angular/core';
import { BrazilianStatesService } from '../services/brazilian-states.service';

@Pipe({
  name: 'stateDescription',
  standalone: false
})
export class StateDescriptionPipe implements PipeTransform {

  constructor(
    private brazilianStates: BrazilianStatesService
  ) { }
  
  transform(value: unknown, ...args: unknown[]): string | null {
    if (typeof value === 'number') {
      const stateDescription = this.brazilianStates.getStateDescriptionById(value);
      return stateDescription || 'Estado não encontrado';
    }
    return 'ID inválido';
  }
}
