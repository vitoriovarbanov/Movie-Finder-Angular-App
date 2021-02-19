import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorsValidatorComponent } from './input-errors-validator.component';

describe('InputErrorsValidatorComponent', () => {
  let component: InputErrorsValidatorComponent;
  let fixture: ComponentFixture<InputErrorsValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorsValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorsValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
