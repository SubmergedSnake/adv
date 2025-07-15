
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

// Express middleware to check Mongoose connection status
const checkMongooseConnection = (req: Request, res: Response, next: NextFunction) => {
	if (mongoose.connection.readyState === 1) {
		// Connected
		return next();
	} else {
		console.log('NO connection, return error')
		return res.status(503).json({
			error: 'Service Unavailable',
			message: 'Database connection not established.'
		});
	}
}

export { checkMongooseConnection };

