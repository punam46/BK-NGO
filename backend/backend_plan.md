# NGO Backend Implementation Plan

We will transform the minimal Express server into a fully functional backend capable of handling contact form submissions, volunteer registrations, and potential donation tracking.

## 1. Core Architecture
- **Tech Stack**: Node.js, Express, MongoDB (via Mongoose).
- **Structure**:
  - `backend/config/`: Database connection.
  - `backend/models/`: Data schemas.
  - `backend/routes/`: API endpoints.
  - `backend/controllers/`: Logic for handling requests.
  - `backend/.env`: Environment variables.

## 2. Phase 1: Foundation
- [ ] Install `mongoose` and `dotenv`.
- [ ] Setup `backend/config/db.js` for MongoDB connection.
- [ ] Create `backend/.env` template.
- [ ] Update `backend/index.js` to initialize DB and use routes.

## 3. Phase 2: Contact & Volunteer Modules
- [ ] Create `Contact` model: Name, Email, Phone, Message, Date.
- [ ] Create `Volunteer` model: Name, Email, Skills, Interests, Availability.
- [ ] Implement POST routes for `/api/contacts` and `/api/volunteers`.

## 4. Phase 3: Email Integration (Optional but recommended)
- [ ] Add `nodemailer` to send auto-responses or notify admins.

## 5. Phase 4: Frontend Integration
- [ ] Update frontend forms to send data to the new endpoints.
