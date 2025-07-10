import express from 'express';
import defectRoutes from './routes/defectRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/api/defects', defectRoutes);

app.use(errorHandler);

export default app;
