import type { IDefect } from "./IDefect"

export type IQueryControls = {
	aircraft_registration: IDefect['aircraft_registration']
	reported_before: IDefect['reported_at']
	reported_after: IDefect['reported_at']
	defect_type: string[]
	description: IDefect['description']
	severity: string[]
}
