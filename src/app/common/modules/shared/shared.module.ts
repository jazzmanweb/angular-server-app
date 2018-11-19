import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from 'src/app/common/services/form.service';
import { DynamicFormNodeComponent } from '../../components/reactive-forms/dynamic-form/dynamic-form-node/dynamic-form-node.component';
import { DynamicFormComponent } from '../../components/reactive-forms/dynamic-form/dynamic-form.component';
import { FormArrayComponent } from '../../components/reactive-forms/dynamic-form/form-array/form-array.component';
import { FormControlComponent } from '../../components/reactive-forms/dynamic-form/form-control/form-control.component';
import { FormControlCheckboxComponent } from '../../components/reactive-forms/form-controls/checkbox/form-control-checkbox.component';
import { FormControlImageUploaderComponent } from '../../components/reactive-forms/form-controls/image-uploader/form-control-image-uploader.component';
import { FormControlInputComponent } from '../../components/reactive-forms/form-controls/input/form-control-input.component';
import { FormControlMultiselectComponent } from '../../components/reactive-forms/form-controls/multiselect/form-control-multiselect.component';
import { FormControlSelectComponent } from '../../components/reactive-forms/form-controls/select/form-control-select.component';
import { FormControlTextareaComponent } from '../../components/reactive-forms/form-controls/textarea/form-control-textarea.component';
import { MatTableComponent } from '../../components/mat-table/mat-table.component';
import { AngularMaterialModule } from './angular-material.module';
import { FileUploadModule } from 'ng2-file-upload';

const COMPONENTS = [
	DynamicFormComponent,
	DynamicFormNodeComponent,
	FormArrayComponent,
	FormControlComponent,
	FormControlInputComponent,
	FormControlCheckboxComponent,
	FormControlSelectComponent,
	FormControlMultiselectComponent,
	FormControlImageUploaderComponent,
	FormControlInputComponent,
	FormControlTextareaComponent,
	MatTableComponent
];

const MODULES = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	AngularMaterialModule,
	FileUploadModule,
];

const PROVIDERS = [FormService];

@NgModule({
	declarations: [COMPONENTS],
	imports: [MODULES],
	exports: [MODULES, COMPONENTS],
	providers: [PROVIDERS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
