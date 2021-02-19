import { Injectable } from '@angular/core';
import { Validator, FormControl } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class CorrectUrl implements Validator {

  validate(formControl: FormControl) {
    const certificate  = formControl.value
    const regex = /(?<http>^[A-z]{4})(?<slash>:\/\/)(?<string>\w+).(?<jpg>jpg$)/
    if (regex.test(certificate)) {
      return null
    } else {
      return { invalidUrl: true }
    }
  }
}
