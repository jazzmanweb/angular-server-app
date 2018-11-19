import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayComponent } from './form-array.component';

describe('FormArrayComponent', () => {
  let component: FormArrayComponent<any>;
  let fixture: ComponentFixture<FormArrayComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
