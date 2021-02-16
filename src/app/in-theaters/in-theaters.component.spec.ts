import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheatersComponent } from './in-theaters.component';

describe('InTheatersComponent', () => {
  let component: InTheatersComponent;
  let fixture: ComponentFixture<InTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTheatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
