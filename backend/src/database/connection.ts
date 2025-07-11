import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//details from the env
const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT
const user = process.env.DB_USER
const passWord = process.env.DB_PASSWORD


export const db = mongoose.connect((`mongodb://${user}:${passWord}@${dbHost}:${dbPort}/${dbName}`))
	.then(res => {
		if (res) {
			console.log(`Connected succesfully to ${dbName}`)
		}

	}).catch(err => {
		console.log('Failed to connect to database', err)
	})

