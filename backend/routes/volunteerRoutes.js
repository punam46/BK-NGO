import express from 'express';
import { registerVolunteer, getVolunteers, getVolunteerCount, deleteVolunteer } from '../controllers/volunteerController.js';

const router = express.Router();

router.route('/count').get(getVolunteerCount);
router.route('/').get(getVolunteers).post(registerVolunteer);
router.route('/:id').delete(deleteVolunteer);

export default router;
