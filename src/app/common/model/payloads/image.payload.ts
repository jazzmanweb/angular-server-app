import { ImageInterface } from '../interfaces/image.interface';

export class ImagePayload implements ImageInterface {
	public path: string;
	public filename: string;
	public extension: string;

	constructor(options: ImageInterface = {} as ImageInterface) {
		options = options || ({} as ImageInterface);
		this.path = options.path || null;
		this.filename = options.filename || null;
		this.extension = options.extension || null;
	}
}
