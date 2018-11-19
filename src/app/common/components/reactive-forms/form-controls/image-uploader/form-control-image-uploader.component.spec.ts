import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlImageUploaderComponent } from './form-control-image-uploader.component';


describe('FormControlImageUploaderComponent', () => {
	let component: FormControlImageUploaderComponent<any>;
	let fixture: ComponentFixture<FormControlImageUploaderComponent<any>>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FormControlImageUploaderComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormControlImageUploaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
