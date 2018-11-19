import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormNodeComponent } from './dynamic-form-node.component';

describe('DynamicFormNodeComponent', () => {
  let component: DynamicFormNodeComponent;
  let fixture: ComponentFixture<DynamicFormNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
