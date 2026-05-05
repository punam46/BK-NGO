import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Program from './models/Program.js';
import Photo from './models/Photo.js';
import Certification from './models/Certification.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const programs = [
  {
    title: "Tribal Development",
    description: "We are deeply committed to the upliftment of tribal communities. By respecting and preserving their cultural heritage, we provide modern educational and economic opportunities to foster self-reliance and inclusive growth.",
    icon: "🏹",
    color: "#795548",
    image: "/src/assets/TRIBAL2.jpg"
  },
  {
    title: "Senior Citizen Welfare",
    description: "Dedicated to enhancing the quality of life for our seniors through comprehensive support systems, health check-ups, and social engagement activities.",
    icon: "👴👵",
    color: "#4caf50",
    image: "/src/assets/G42.jpeg"
  },
  {
    title: "Disability Affair",
    description: "Creating an inclusive society where physically challenged individuals have equal opportunities for growth and expression.",
    icon: "♿",
    color: "#607d8b",
    image: "/disability_affair.png"
  }
];

const photos = [
  {
    src: "/src/assets/g16.jpeg",
    category: "BLOOD DONATION",
    title: "Blood Donation Program - Drive 1",
    date: "March 2024"
  },
  {
    src: "/src/assets/g31.jpeg",
    category: "BLOOD DONATION",
    title: "Community Blood Donation Outreach",
    date: "April 2024"
  }
];

const importData = async () => {
  try {
    await Program.deleteMany();
    await Photo.deleteMany();
    await Certification.deleteMany();

    await Program.insertMany(programs);
    await Photo.insertMany(photos);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
