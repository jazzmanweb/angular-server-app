import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlTextareaComponent } from './form-control-textarea.component';

describe('FormControlTextareaComponent', () => {
  let component: FormControlTextareaComponent<any>;
  let fixture: ComponentFixture<FormControlTextareaComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
