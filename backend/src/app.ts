import express from 'express';
import defectRoutes from './routes/defectRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { checkMongooseConnection } from './middlewares/checkMongooseConnectionHandler'
import cors from 'cors'

const app = express();

app.use(express.json());

// Enable CORS for all routes
app.use(cors())
app.use(checkMongooseConnection)

app.use('/api/defects', defectRoutes);

app.use(errorHandler);

export default app;
