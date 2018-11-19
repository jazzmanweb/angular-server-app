import { Router, Request, Response, NextFunction } from 'express';
import { RequestResponseModel } from '../../src/app/common/model/models/request-response.model';
import { ImagePayload } from '../../src/app/common/model/payloads/image.payload';
import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import * as shortid from 'shortid';

const extension: string = 'jpg';
const storage: multer.StorageEngine = multer.diskStorage({
	destination: './upload',
	filename: function(req, file, cb) {
		cb(null, shortid.generate() + '.' + extension);
	}
});
const requestHandler = multer({ storage });
const homePath: string = __dirname + path.sep + '..' + path.sep + '..' + path.sep + 'uploads';

const mkdirSync = (targetPath: string) => {
	targetPath.split(path.sep).reduce((currentPath, folder) => {
		currentPath += folder + path.sep;
		if (!fs.existsSync(currentPath)) {
			fs.mkdirSync(currentPath);
		}
		return currentPath;
	}, '');
};

export class ImageUploaderRouter {
	public router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	public upload(req: Request, res: Response): void {
		const { directory, id } = req.params;

		const targetDirectory = directory + path.sep + id;
		const targetPath: string = homePath + path.sep + targetDirectory;
		if (!fs.existsSync(targetPath)) {
			mkdirSync(targetPath);
		}

		const targetFile = targetPath + path.sep + req.file.filename;
		const src$: fs.ReadStream = fs.createReadStream(req.file.path);
		const target$: fs.WriteStream = fs.createWriteStream(targetFile);

		src$.pipe(target$);

		src$.on('end', () =>
			res.status(200).json(
				new RequestResponseModel({
					message: 'success',
					payload: new ImagePayload({
						path: targetDirectory,
						filename: req.file.filename,
						extension
					})
				})
			)
		);

		src$.on('error', error =>
			res.status(500).json(
				new RequestResponseModel({
					message: 'error',
					error
				})
			)
		);
	}

	public mkdirSync(targetPath: string): void {
		targetPath.split(path.sep).reduce((currentPath, folder) => {
			currentPath += folder + path.sep;
			if (!fs.existsSync(currentPath)) {
				fs.mkdirSync(currentPath);
			}
			return currentPath;
		}, '');
	}

	public routes() {
		this.router.post(
			'/:directory/:id',
			requestHandler.single('file'),
			this.upload
		);
	}
}
