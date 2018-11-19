import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlMultiselectComponent } from './form-control-multiselect.component';

describe('FormControlMultiselectComponent', () => {
  let component: FormControlMultiselectComponent<any>;
  let fixture: ComponentFixture<FormControlMultiselectComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
