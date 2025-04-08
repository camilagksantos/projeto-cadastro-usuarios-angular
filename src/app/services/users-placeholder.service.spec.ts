/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersPlaceholderService } from './users-placeholder.service';

describe('Service: UsersPlaceholder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersPlaceholderService]
    });
  });

  it('should ...', inject([UsersPlaceholderService], (service: UsersPlaceholderService) => {
    expect(service).toBeTruthy();
  }));
});
