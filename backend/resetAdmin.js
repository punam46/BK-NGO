import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const resetAdmin = async () => {
  try {
    const email = 'admin@bkeducational.org';
    const password = 'adminpassword123';

    // Delete existing admin with this email
    await User.deleteMany({ email });

    // Create new admin
    const user = new User({ email, password });
    await user.save();

    console.log('------------------------------------------');
    console.log('ADMIN RESET SUCCESSFUL');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('------------------------------------------');
    process.exit();
  } catch (error) {
    console.error('Error resetting admin:', error.message);
    process.exit(1);
  }
};

resetAdmin();
