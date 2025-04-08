/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrazilianStatesService } from './brazilian-states.service';

describe('Service: BrazilianStates', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrazilianStatesService]
    });
  });

  it('should ...', inject([BrazilianStatesService], (service: BrazilianStatesService) => {
    expect(service).toBeTruthy();
  }));
});
