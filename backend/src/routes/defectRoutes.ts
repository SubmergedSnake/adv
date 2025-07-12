import { Router } from 'express';
import {
	getDefects,
} from '../controllers/defectController';

const router = Router();

router.post('/', getDefects);

export default router;
