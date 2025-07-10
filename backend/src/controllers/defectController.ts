import { Request, Response, NextFunction } from 'express';
import { Defect } from '../models/defect';

export const getDefects = (req: Request, res: Response, next: NextFunction) => {
	try {
		res.json([{ id: 123, description: 'This is a defect' }]);
	} catch (error) {
		next(error);
	}
};

