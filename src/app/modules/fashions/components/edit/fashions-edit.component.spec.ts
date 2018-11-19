import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsEditComponent } from './fashions-edit.component';

describe('FashionsEditComponent', () => {
	let component: FashionsEditComponent;
	let fixture: ComponentFixture<FashionsEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FashionsEditComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FashionsEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
