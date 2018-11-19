import { FormImageInterface } from '../interfaces/form-image.interfrace';

export class FormImageModel implements FormImageInterface {
	public max: number;
	public url: string;
	public preview: boolean;
	public maxFileSize: number;
	public extensions: string[];
	public uploadedFiles: string[];

	constructor(options: FormImageInterface = {} as FormImageInterface) {
		options = options || ({} as FormImageInterface);
		this.max = options.max || 10;
		this.url = options.url || 'www.node.pl';
		this.preview = options.preview || false;
		this.maxFileSize = options.maxFileSize || 1048576;
		this.extensions = options.extensions || ['jpg'];
		this.uploadedFiles = options.uploadedFiles || [];
	}
}