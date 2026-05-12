import express from 'express';
import { 
  getPrograms, getPhotos, getCertifications, getPublications, getSuccessfulPrograms,
  createPhoto, createCertification, createPublication, createProgram, createSuccessfulProgram,
  deletePhoto, deleteCertification, deletePublication, deleteProgram, deleteSuccessfulProgram,
  updatePhoto, updateCertification, updatePublication, updateProgram, updateSuccessfulProgram,
  getViews, incrementViews
} from '../controllers/dataController.js';

const router = express.Router();

router.get('/views', getViews);
router.post('/views/increment', incrementViews);

router.route('/programs')
  .get(getPrograms)
  .post(createProgram);
router.route('/programs/:id')
  .delete(deleteProgram)
  .put(updateProgram);

router.route('/photos')
  .get(getPhotos)
  .post(createPhoto);
router.route('/photos/:id')
  .delete(deletePhoto)
  .put(updatePhoto);

router.route('/certifications')
  .get(getCertifications)
  .post(createCertification);
router.route('/certifications/:id')
  .delete(deleteCertification)
  .put(updateCertification);

router.route('/publications')
  .get(getPublications)
  .post(createPublication);
router.route('/publications/:id')
  .delete(deletePublication)
  .put(updatePublication);

router.route('/successful-programs')
  .get(getSuccessfulPrograms)
  .post(createSuccessfulProgram);
router.route('/successful-programs/:id')
  .delete(deleteSuccessfulProgram)
  .put(updateSuccessfulProgram);

export default router;
