import express, { Router } from 'express';
import dotenv from 'dotenv';

const getDefects = (req, res, next) => {
    try {
        res.json([{ id: 123, description: 'This is a defect' }]);
    }
    catch (error) {
        next(error);
    }
};

const router = Router();
router.get('/', getDefects);

const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};

const app = express();
app.use(express.json());
app.use('/api/defects', router);
app.use(errorHandler);

dotenv.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
};

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
