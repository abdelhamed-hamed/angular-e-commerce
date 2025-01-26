import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class matchPasswordService {
  matchPassword(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass = control.get(password);
      const confirmPass = control.get(confirmPassword);

      if (
        confirmPass?.value != pass?.value &&
        confirmPass?.touched &&
        !confirmPass?.hasError('required') &&
        pass?.errors == null &&
        pass?.touched
      ) {
        confirmPass?.setErrors({ matchPassword: 'true' });
        return { matchPassword: 'true' };
      } else {
        return null;
      }
    };
  }
}
