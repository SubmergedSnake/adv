import { Request, Response, NextFunction } from 'express';
import { DefectCollection } from '../models/defectSchema';

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
			defects = [
				{
					"id": "n8mbej6t",
					"aircraft_registration": "YG-DSZ",
					"reported_at": "2025-04-05T03:13:19.142000Z",
					"defect_type": "Vibration anomaly",
					"description": "Unusual vibration detected in engine nacelle.",
					"severity": "High"
				}
			]

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

