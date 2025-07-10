import { Router } from 'express';
import {
	getDefects,
} from '../controllers/defectController';

const router = Router();

router.get('/', getDefects);

export default router;
