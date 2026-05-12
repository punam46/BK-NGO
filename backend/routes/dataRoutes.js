import express from 'express';
import { 
  getPrograms, getPhotos, getCertifications, getPublications, getSuccessfulPrograms, getVolunteerActionImages,
  createPhoto, createCertification, createPublication, createProgram, createSuccessfulProgram, createVolunteerActionImage,
  deletePhoto, deleteCertification, deletePublication, deleteProgram, deleteSuccessfulProgram, deleteVolunteerActionImage,
  updatePhoto, updateCertification, updatePublication, updateProgram, updateSuccessfulProgram, updateVolunteerActionImage,
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

router.route('/volunteer-action-images')
  .get(getVolunteerActionImages)
  .post(createVolunteerActionImage);
router.route('/volunteer-action-images/:id')
  .delete(deleteVolunteerActionImage)
  .put(updateVolunteerActionImage);

export default router;
