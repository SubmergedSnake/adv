import dotenv from 'dotenv'
import mongoose, { Mongoose } from 'mongoose'
import { errorHandler } from '../middlewares/errorHandler'

dotenv.config()

//details from the env
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT
const user = process.env.DB_USER
const passWord = process.env.DB_PASSWORD


export const db = async (): Promise<Mongoose | undefined> => {
	let connection
	try {
		connection = await mongoose.connect((`mongodb://:${passWord}@${dbHost}:${dbPort}/${dbName}`))
	} catch (error) {
		console.log('Failed to connect to database', error)
	}
	return connection
}

