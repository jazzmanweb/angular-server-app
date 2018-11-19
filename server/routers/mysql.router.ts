import { Request, Response, Router } from 'express';
import * as mysql from 'mysql';
import { MYSQL_DATABASE } from '../../config/config';

export class MySQLRouter {
	public router: Router;
	public dbService: mysql.Connection;

	constructor(db: mysql.Connection) {
		this.dbService = db;
		this.router = Router();
		this.routes();
		console.log('isUndefined: ', this.dbService === undefined);
	}

	public getList(req: Request, res: Response, next) {
		try {
			const {name} = req.params;

			const endpointMap = {
				'discounts': 'discounts',
				'fashions': 'products',
				'orders': 'orders',
				'payments': 'payments',
				'payments_flow': 'payments_flow',
				'products': 'products_classes',
				'users': 'users',
			}

			const db_name = name && endpointMap[name] || '';
			if (!db_name) throw 'NO TABLE';

			const mysqlConnection = mysql.createConnection({
				host: MYSQL_DATABASE.host,
				user: MYSQL_DATABASE.user,
				password: MYSQL_DATABASE.password,
				database: MYSQL_DATABASE.database
			});

			mysqlConnection.connect(function(err) {
				if (err) console.error(err);
				console.log('MySQL Connected!');
			});

			const query = 'SELECT * FROM ' + db_name + ';'
			mysqlConnection.query(
				query,
				[],
				(err, results, fields) => {
					if (err) return null;
					var objs = [];
					for (var i = 0;i < results.length; i++) {
						const row = {};
						fields.forEach((field) => {
							row[field.name]=results[i][field.name];
						});
						objs.push(row);
					}
					mysqlConnection.end();
			        res.status(200).json(objs);
				}
			);
		} catch (error) {
			console.log('error', error);
		}
	}

	public routes() {
		this.router.post('/:name', this.getList);
	}
}
