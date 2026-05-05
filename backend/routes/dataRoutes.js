import express from 'express';
import { getPrograms, getPhotos, getCertifications } from '../controllers/dataController.js';

const router = express.Router();

router.get('/programs', getPrograms);
router.get('/photos', getPhotos);
router.get('/certifications', getCertifications);

export default router;
