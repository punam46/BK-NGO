import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import volunteerRoutes from './routes/volunteerRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Register Payment Routes FIRST
app.use('/api/payment', paymentRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api', dataRoutes);

// Catch-all for 404s to help debugging
app.use((req, res, next) => {
  console.log(`404 at: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: `Route ${req.method} ${req.url} not found` });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
