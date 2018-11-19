import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileItem, FileUploader, ParsedResponseHeaders } from 'ng2-file-upload/';
import { FormCustomizationInterface } from 'src/app/common/model/interfaces/form-customization.interface';
import { ImageInterface } from 'src/app/common/model/interfaces/image.interface';
import { RequestResponseModel } from 'src/app/common/model/models/request-response.model';
import { ImagePayload } from 'src/app/common/model/payloads/image.payload';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';

const URL = 'http://localhost:3000/api/images/';

@Component({
	selector: 'form-control-image-uploader',
	templateUrl: './form-control-image-uploader.component.html',
	styleUrls: ['./form-control-image-uploader.component.css'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FormControlImageUploaderComponent),
			multi: true
		}
	]
})
export class FormControlImageUploaderComponent<T = ImagePayload>
	extends AbstractFormComponent
	implements ControlValueAccessor {
	public uploader: FileUploader;
	@Input()
	public set customization(customization: FormCustomizationInterface) {
		this.uploader = new FileUploader({
			url: `${URL}/${customization.directory}/${customization.id}`
		});
	}

	@Input() public disabled = false;

	public hasBaseDropZoneOver: boolean = false;
	public images: ImagePayload[] = [];
	public onChange = (images: ImageInterface[]) => {};
	public onTouched = () => {};

	public get value(): ImagePayload[] {
		return [...this.images];
	}

	public writeValue(images: ImagePayload[]): void {
		this.images = (images || []).map(item => new ImagePayload(item));
		this.onChange(this.value);
	}

	public addValue(image: ImagePayload) {
		this.writeValue([...this.value, image]);
	}

	public registerOnChange(fn: (images: ImageInterface[]) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	public fileOverBase(event): void {
		this.hasBaseDropZoneOver = event;
	}

	public handleUploadAll() {
		this.uploader.uploadAll();
	}

	public handleCancelAll() {
		this.uploader.cancelAll();
	}

	public handleClearQueue() {
		this.uploader.clearQueue();
	}

	public handleUpload(item) {
		this.uploader.onSuccessItem = this.onSuccessItem.bind(this);
		item.upload();
	}

	public handleCancel(item) {
		item.cancel();
	}

	public handleRemove(item) {
		item.remove();
	}

	public onSuccessItem(
		item: FileItem,
		response: string,
		status: number,
		headers: ParsedResponseHeaders
	) {
		if (!response) {
			return;
		}

		const responseModel = new RequestResponseModel(JSON.parse(response));
		const image = new ImagePayload(responseModel.payload);

		if (image) {
			this.addValue(image);
		}
	}
}
