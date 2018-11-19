import * as mysql from 'mysql';

export class MysqlConnectionService {
	private connection: mysql.Connection;

	constructor(db: mysql.Connection) {
		this.connection = db;
	}
}
