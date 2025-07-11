import app from './app';
import config from './config/config';
import { db } from './database/connection';

db.then(() => {
	app.listen(config.port, () => {
		console.log(`Server running on port ${config.port}`);
	});
})
