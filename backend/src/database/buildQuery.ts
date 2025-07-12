import { RootFilterQuery } from "mongoose";
import { Defect } from "../models/defect";
import { argv0 } from "process";

export default (queryControls: Request['body']): RootFilterQuery<Defect> => {

	const aircraftRegistration = (queryControls as any).aircraft_registration
	const reportedBefore = (queryControls as any).reported_before
	const reporedAfter = (queryControls as any).reported_after
	const defectTypeArray = (queryControls as any).defect_type
	const description = (queryControls as any).description
	const severityArray = (queryControls as any).severity

	let query: RootFilterQuery<Defect> = {}

	if (Array.isArray(severityArray) && severityArray.length > 0) {
		query.severity = { $in: severityArray }
	}
	if (Array.isArray(defectTypeArray) && defectTypeArray.length > 0) {
		query.defect_type = { $in: defectTypeArray }
	}

	return query
}
