import app from './app';
import config from './config/config';
import { db } from './database/connection';

app.listen(config.port, async () => {
	const connection = await db()
	console.log(`Connected to database?: ${!!connection}`)
	console.log(`Server running on port ${config.port}`);
});
