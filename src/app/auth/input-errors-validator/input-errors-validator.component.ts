import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-errors-validator',
  templateUrl: './input-errors-validator.component.html',
  styleUrls: ['./input-errors-validator.component.css']
})
export class InputErrorsValidatorComponent implements OnInit {
  @Input() control: FormControl

  constructor() { }

  ngOnInit(): void {
  }

}
