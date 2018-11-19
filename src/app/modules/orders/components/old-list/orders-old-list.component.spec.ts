import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOldListComponent } from './orders-old-list.component';

describe('OrdersListCoOrdersOldListComponentmponent', () => {
	let component: OrdersOldListComponent;
	let fixture: ComponentFixture<OrdersOldListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OrdersOldListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrdersOldListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
