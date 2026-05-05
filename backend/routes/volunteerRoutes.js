import express from 'express';
import { registerVolunteer, getVolunteers } from '../controllers/volunteerController.js';

const router = express.Router();

router.route('/').get(getVolunteers).post(registerVolunteer);

export default router;
