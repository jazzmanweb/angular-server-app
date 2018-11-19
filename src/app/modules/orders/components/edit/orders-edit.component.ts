import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AbstractEditComponent } from 'src/app/common/components/abstract-views/edit/abstract-edit.component';
import { FormControlsInterface } from 'src/app/common/model/interfaces/form-controls.interface';
import { FormItemModel } from 'src/app/common/model/models/form-item.model';
import { OrderPayload } from 'src/app/common/model/payloads/order.payload';
import { FormService } from 'src/app/common/services/form.service';
import { StateInterface } from 'src/app/store/state.interface';
import { OrdersActions } from '../../store/actions/orders.actions';
import { getOrder } from '../../store/selectors/orders.selectors';

@Component({
	selector: 'orders-edit',
	templateUrl:
		'../../../../common/components/abstract-views/edit/abstract-edit.component.html',
	styleUrls: ['./orders-edit.component.css'],
	providers: [FormService]
})
export class OrdersEditComponent extends AbstractEditComponent<OrderPayload> {
	public controls: FormControlsInterface = {
		date: new FormItemModel<Date>({
			formControlName: 'date',
			placeholder: 'date'
		})
	};

	public itemSelector = getOrder;
	public saveSuccessAction$ = this.actions$.ofType(
		OrdersActions.SAVE_ITEM_SUCCESS
	);
	public saveFailureAction$ = this.actions$.ofType(
		OrdersActions.SAVE_ITEM_FAILURE
	);

	constructor(
		protected route: ActivatedRoute,
		protected router: Router,
		protected formService: FormService,
		protected actions$: Actions,
		protected store: Store<StateInterface>,
		protected actions: OrdersActions
	) {
		super({
			route,
			router,
			formService,
			actions,
			actions$,
			store
		});
		this.formService.createForm(this.controls);
	}

	public handleSave(form: OrderPayload) {
		this.store.dispatch(this.actions.saveItem(new OrderPayload(form)));
	}
}
