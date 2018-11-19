import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOldListComponent } from './products-old-list.component';

describe('ProductsListCoProductsOldListComponentmponent', () => {
	let component: ProductsOldListComponent;
	let fixture: ComponentFixture<ProductsOldListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProductsOldListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsOldListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
