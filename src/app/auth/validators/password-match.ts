import { Validator, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PasswordMatch implements Validator {

  validate(formGroup: FormGroup) {
    const { password, repeatPassword } = formGroup.value

    if (password === repeatPassword) {
      return null
    } else {
      return { passwordsDontMatch: true }
    }


  }
}
