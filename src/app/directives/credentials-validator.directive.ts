import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UsersPlaceholderService } from '../services/users-placeholder.service';
import { map, Observable } from 'rxjs';

@Directive({
  selector: '[appCredentialsValidator]',
  standalone: false,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true
    }
  ]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propToCheck: 'username' | 'email' = 'username';

  constructor(
    private readonly _usersPlaceholderService: UsersPlaceholderService
  ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService.getUsersPlaceholderList().pipe(
      map((usersListResponse) => {
        const hasUser = usersListResponse.find((user) => user[this.propToCheck].toLowerCase() === control.value.trim().toLowerCase());

        const validatorKey = this.propToCheck === 'username' ? 'invalidUsername' : 'invalidEmail';
        
        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}