import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlComponent } from './form-control.component';

describe('FormControlComponent', () => {
  let component: FormControlComponent<any>;
  let fixture: ComponentFixture<FormControlComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
