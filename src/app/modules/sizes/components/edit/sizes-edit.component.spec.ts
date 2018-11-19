import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesEditComponent } from './sizes-edit.component';

describe('SizesEditComponent', () => {
	let component: SizesEditComponent;
	let fixture: ComponentFixture<SizesEditComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SizesEditComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SizesEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
