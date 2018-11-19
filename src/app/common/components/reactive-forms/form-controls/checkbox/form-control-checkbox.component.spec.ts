import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlCheckboxComponent } from './form-control-checkbox.component';

describe('FormControlCheckboxComponent', () => {
  let component: FormControlCheckboxComponent<any>;
  let fixture: ComponentFixture<FormControlCheckboxComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
