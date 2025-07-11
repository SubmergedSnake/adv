import Joi from 'joi';
import { model, Schema } from 'mongoose';
import { Defect } from './defect';

export const DefectSchemaValidate = Joi.object({
	id: Joi.string().required(),
	aircraft_registration: Joi.string().required(),
	reported_at: Joi.date().required(),
	defect_type: Joi.string().required(),
	description: Joi.string().required(),
	severity: Joi.string().required()
});


const DefectSchema = new Schema<Defect>({
	id: {
		type: String,
		required: true
	},

	aircraft_registration: {
		type: String,
		required: true
	},

	reported_at: {
		type: Date,
		required: true
	},

	defect_type: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},

	severity: {
		type: String,
		required: true
	}
})

export const DefectCollection = model<Defect>('defects', DefectSchema)
