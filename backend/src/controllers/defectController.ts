import { Request, Response, NextFunction } from 'express';
import { DefectCollection } from '../models/defectSchema';

export const getDefects = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const defects = await DefectCollection.find({})
			.sort({ reported_at: -1 })
			.limit(100)

		res.json(defects)
	}
	catch (error) {
		res.status(500).json({
			status: "Failed",
			message: error
		})
	}
};

