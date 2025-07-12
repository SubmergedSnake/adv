import { Request, Response, NextFunction } from 'express';
import { DefectCollection } from '../models/defectSchema';
import buildQuery from '../database/buildQuery';

export const getDefects = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { body: queryControls } = req
		console.log("CONTROLS:", queryControls)
		let defects
		if (queryControls && Object.keys(queryControls).length == 0) {
			defects = await DefectCollection.find({})
				.sort({ reported_at: -1 })
				.limit(100)
		}
		else {
			const query = buildQuery(queryControls)
			console.log('THE QUERY')
			console.log(query)
			defects = await DefectCollection.find(query)
		}
		res.json(defects)
	}

	catch (error) {
		res.status(500).json({
			status: "Failed",
			message: error
		})
	}
};

