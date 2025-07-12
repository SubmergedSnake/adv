import { RootFilterQuery } from "mongoose";
import { Defect } from "../models/defect";

export default (queryControls: Request['body']): RootFilterQuery<Defect> => {

	const aircraftRegistration = (queryControls as any).aircraft_registration
	const reportedBefore = (queryControls as any).reported_before
	const reportedAfter = (queryControls as any).reported_after
	const defectTypeArray = (queryControls as any).defect_type
	const severityArray = (queryControls as any).severity

	let query: RootFilterQuery<Defect> = {}

	if (Array.isArray(severityArray) && severityArray.length > 0) {
		query.severity = { $in: severityArray }
	}
	if (Array.isArray(defectTypeArray) && defectTypeArray.length > 0) {
		query.defect_type = { $in: defectTypeArray }
	}

	if (aircraftRegistration) {
		query.aircraft_registration = { $eq: aircraftRegistration }
	}

	// TODO: needs to check for presence of both parameters and do a range query 
	if (reportedBefore) {
		query.reported_at = { $lte: new Date(reportedBefore).toISOString() }
	}
	if (reportedAfter) {
		query.reported_at = { $lt: new Date(reportedAfter).toISOString() }
	}

	return query
}
