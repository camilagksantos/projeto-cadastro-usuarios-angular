import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const senha = control.value.senha;
    const confirmacaoSenha = control.value.confirmacaoSenha;
    const passwordConfirmationControl = control.get('confirmacaoSenha');

    if (!senha || !confirmacaoSenha) return null;

    if (senha !== confirmacaoSenha) {
      // Set error on the password confirmation control que esta dentro do formGroup
      passwordConfirmationControl?.setErrors({ invalidPasswordConfirmation: true });

      return { invalidPasswordConfirmation: true };
    }
    return null;
  }
}