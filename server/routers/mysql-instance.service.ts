import * as mysql from 'mysql';
import { MYSQL_DATABASE } from '../../config/config';
import { MysqlConnectionService } from './mysql-connection.service';

// Don't actually connect here
// Just create the object so it's ready for connection.
const mysqlConnection: mysql.Connection = mysql.createConnection({
	host: MYSQL_DATABASE.host,
	user: MYSQL_DATABASE.user,
	password: MYSQL_DATABASE.password,
	database: MYSQL_DATABASE.database
});
// Wire up the internal db connection
// Remember this is a singleton.
export default new MysqlConnectionService(mysqlConnection);
