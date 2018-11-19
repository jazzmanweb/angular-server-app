import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlInputComponent } from './form-control-input.component';

describe('FormControlInputComponent', () => {
  let component: FormControlInputComponent<any>;
  let fixture: ComponentFixture<FormControlInputComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
