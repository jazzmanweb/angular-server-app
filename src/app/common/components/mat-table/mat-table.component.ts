import {
	Input,
	Component,
	EventEmitter,
	OnInit,
	Output,
	ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ColumnInterface } from '../../model/interfaces/column.interface';
import { ColumnModel } from '../../model/models/column.model';

@Component({
	selector: 'app-mat-table',
	templateUrl: './mat-table.component.html',
	styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent<T> {
	@ViewChild(MatPaginator)
	public paginator: MatPaginator;
	@ViewChild(MatSort)
	public sort: MatSort;

	public dataSource: MatTableDataSource<T>;
	public columnsFields: string[];
	public columnsList: ColumnModel[];

	@Input()
	public set list(list: T[]) {
		this.dataSource = new MatTableDataSource(list);

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	@Input()
	public set displayedColumns(columns: ColumnModel[]) {
		if (!columns) {
			return;
		}

		this.columnsList = columns;
		this.columnsFields = columns.map(item => item.field);
	}

	@Output()
	public onDetails: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onRemove: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onToggle: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onEdit: EventEmitter<string> = new EventEmitter<string>();
	@Output()
	public onCopy: EventEmitter<T> = new EventEmitter<T>();

	constructor(public route: ActivatedRoute, public router: Router) {}

	public applyFilter(filterValue: string): void {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	public handleDetails(id: string) {
		this.router.navigate([id], { relativeTo: this.route.parent });
	}

	public handleRemove(id: string) {
		this.onRemove.emit(id);
	}

	public handleToggle(id: string) {
		this.onToggle.emit(id);
	}

	public handleEdit(id: string) {
		this.router.navigate([id, 'edit'], { relativeTo: this.route.parent });
	}

	public handleCopy(item: T) {
		this.onCopy.emit(Object.assign({}, item, { id: '' }));
		this.router.navigate(['create'], { relativeTo: this.route.parent });
	}

	public getValue(row: any, field: string): string {
		const fields: string[] = field.split('.').reverse();
		return this.getChildValue(row, fields).substring(0, 20);
	}

	private getChildValue(item: object, fields: string[]) {
		if (
			typeof item === 'string' ||
			typeof item === 'number' ||
			typeof item === 'boolean'
		) {
			return item;
		}

		let field = fields.pop();
		if (field === '*' && item.hasOwnProperty('length')) {
			field = Array.from(Array(item['length']).keys()).join(',');
		}
		const keys = field.split(',');
		return keys
			.map(key => {
				if (fields.length === 0 || !item[key]) {
					return item[key];
				}

				return this.getChildValue(item[key], [...fields]);
			})
			.filter(Boolean)
			.join(', ');
	}
}
