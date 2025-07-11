import { Request, Response, NextFunction } from 'express';
import { DefectCollection } from '../models/defectSchema';

export const getDefects = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const defects = await DefectCollection.find({});
		res.json(defects)
	}
	catch (error) {
		res.status(500).json({
			status: "Failed",
			message: error
		})
	}
};

