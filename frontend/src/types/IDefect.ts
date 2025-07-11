type Severity = 'High' | 'Medium' | 'Low'
type DefectType =
	'Vibration anomaly' |
	'Oil pressure anomaly' |
	'Hydraulic leak' |
	'Fan blade damage' |
	'Compressor stall' |
	'Fuel pump failure' |
	'Turbine blade crack' |
	'Throttle control issue' |
	'Exhaust gas temperature spike' |
	'Ignition system fault'

export type IDefect = {
	id: string;
	aircraft_registration: string;
	reported_at: string;
	defect_type: DefectType;
	description: string;
	severity: Severity
}

