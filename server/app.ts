import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as mysql from 'mysql';
import { MONGO_URI, MYSQL_DATABASE } from '../config/config';
import { CampaignRouter } from './routers/campaign.router';
import { CategoryRouter } from './routers/category.router';
import { FashionRouter } from './routers/fashion.router';
import { ImageUploaderRouter } from './routers/image-uploader.router';
import { MySQLRouter } from './routers/mysql.router';
import { OrderRouter } from './routers/order.router';
import { ProductRouter } from './routers/product.router';
import { ShippingRouter } from './routers/shipping.router';
import { SizeRouter } from './routers/size.router';
class App {
	public app: express.Application;
	public mongoUri: string = MONGO_URI;
	public mysqlConnection: mysql.Connection;
	public uploadDir: string = './uploads/';

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	public config() {
		this.mongooseConnect();
		this.setApi();
		this.setApiV1();
		this.setApiImages();
	}

	public setApi() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(logger('dev'));
		this.app.use(compression());
		this.app.use(helmet());
		this.handleCors();
	}

	public handleCors() {
		const corsOptions: cors.CorsOptions = {
			allowedHeaders: ['sessionId', 'Content-Type'],
			exposedHeaders: ['sessionId'],
			origin: 'http://localhost:4200',
			credentials: true,
			optionsSuccessStatus: 200,
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			preflightContinue: false
		};
		this.app.use(cors(corsOptions));
	}

	public setApiV1() {}

	public setApiImages() {}

	public mongooseConnect() {
		mongoose
			.connect(
				this.mongoUri || process.env.MONGODB_URL,
				{ useNewUrlParser: true }
			)
			.then(() => {
				console.log('DB connected');
			})
			.catch(() => {
				console.log('DB connected');
			});
	}

	public mysqlConnect() {
		this.mysqlConnection = mysql.createConnection({
			host: MYSQL_DATABASE.host,
			user: MYSQL_DATABASE.user,
			password: MYSQL_DATABASE.password,
			database: MYSQL_DATABASE.database
		});

		this.mysqlConnection.connect(function(err) {
			if (err) throw err;
			console.log('MySQL Connected!');
		});
	}

	public routes() {
		let router: express.Router = express.Router();


		const mysqlRouter = new MySQLRouter(this.mysqlConnection);
		const categoryRouter = new CategoryRouter();
		const campaignRouter = new CampaignRouter();
		const fashionRouter = new FashionRouter();
		const orderRouter = new OrderRouter();
		const productRouter = new ProductRouter();
		const sizeRouter = new SizeRouter();
		const shippingRouter = new ShippingRouter();
		const imageUploaderRouter = new ImageUploaderRouter();

		this.app.use(router);

		this.app.use('/api/v0', mysqlRouter.router);

		this.app.use('/api/v1/categories', categoryRouter.router);
		this.app.use('/api/v1/campaigns', campaignRouter.router);
		this.app.use('/api/v1/fashions', fashionRouter.router);
		this.app.use('/api/v1/orders', orderRouter.router);
		this.app.use('/api/v1/products', productRouter.router);
		this.app.use('/api/v1/sizes', sizeRouter.router);
		this.app.use('/api/v1/shipping', shippingRouter.router);

		this.app.use('/api/images', imageUploaderRouter.router);
	}
}

export default new App().app;
