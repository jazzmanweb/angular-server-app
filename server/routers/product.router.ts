import { Router, Request, Response, NextFunction } from 'express';
import ModelDocument from '../models/product.model';
import { ProductPayload } from '../../src/app/common/model/payloads/product.payload';
import { RequestResponseModel } from '../../src/app/common/model/models/request-response.model';

export class ProductRouter {
	public router: Router;

	constructor() {
		this.router = Router();
		this.routes();
	}

	public getList(req: Request, res: Response): void {
		ModelDocument.find({})
			.then(data => {
				res.status(200).json(
					new RequestResponseModel({
						message: 'success',
						payload: data
					})
				);
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public getItem(req: Request, res: Response): void {
		const { id } = req.params;

		ModelDocument.findOne({ id })
			.then(data => {
				res.status(200).json(
					new RequestResponseModel({
						message: 'success',
						payload: data
					})
				);
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public create(req: Request, res: Response): void {
		const payload = new ProductPayload(req.body);
		const document = new ModelDocument(payload);

		document
			.save()
			.then(data => {
				res.status(201).json(
					new RequestResponseModel({
						message: 'success',
						payload: data
					})
				);
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public update(req: Request, res: Response): void {
		const { id } = req.params;
		const payload = new ProductPayload(req.body);

		ModelDocument.findOneAndUpdate({ id }, payload)
			.then(data => {
				res.status(201).json(
					new RequestResponseModel({
						message: 'success',
						payload: data
					})
				);
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public toggle(req: Request, res: Response): void {
		const { id } = req.params;

		ModelDocument.findOne(
			{ id },
			function(error, data) {
				data['published'] = data && !data['published'];
				data.save(function(error) {
					if (error) {
						console.error('TOGGLE ERROR!');
					}
				})
			}
		)
			.then(data => {
				res.status(201).json(
					new RequestResponseModel({
						message: 'success',
						payload: data
					})
				);
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public delete(req: Request, res: Response): void {
		const { id } = req.params;

		ModelDocument.findOneAndDelete({ id })
			.then(data => {
				res.status(202).end();
			})
			.catch(error => {
				res.status(500).json(
					new RequestResponseModel({
						message: 'error',
						error
					})
				);
			});
	}

	public routes() {
		this.router.get('/', this.getList);
		this.router.get('/:id', this.getItem);
		this.router.post('/', this.create);
		this.router.put('/:id', this.update);
		this.router.put('/:id/toggle', this.toggle);
		this.router.delete('/:id', this.delete);
	}
}

// const shippingRoutes = new ShippingRouter();
// shippingRoutes.routes();
// export default shippingRoutes.router;
