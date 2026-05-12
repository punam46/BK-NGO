import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Program from './models/Program.js';
import Photo from './models/Photo.js';
import Certification from './models/Certification.js';
import Publication from './models/Publication.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const photos = [
  { src: "http://localhost:5000/uploads/g16.jpeg", category: "BLOOD DONATION", title: "Blood Donation Program", date: "March 2024" },
  { src: "http://localhost:5000/uploads/g31.jpeg", category: "BLOOD DONATION", title: "Community Blood Donation Outreach", date: "April 2024" },
  { src: "http://localhost:5000/uploads/g17.jpeg", category: "ENVIRONMENT", title: "Mountain Cleaning Program - Ramshej Fort", date: "May 2024" },
  { src: "http://localhost:5000/uploads/g18.jpeg", category: "ENVIRONMENT", title: "Fort Restoration & Cleaning Drive", date: "May 2024" },
  { src: "http://localhost:5000/uploads/g23.jpeg", category: "EVENTS", title: "Babasaheb Ambedkar Jayanti Celebration", date: "April 14, 2024" },
  { src: "http://localhost:5000/uploads/g25.jpeg", category: "SOCIAL WELFARE", title: "Water Distribution to Communities", date: "June 2024" },
  { src: "http://localhost:5000/uploads/g29.jpeg", category: "WOMEN EMPOWERMENT", title: "Women Safety & Awareness Workshop", date: "July 2024" }
];

const certifications = [
  {
    title: "Societies Registration Act, 1860",
    subtitle: "Registration Certificate",
    organization: "Government of Maharashtra",
    idNumber: "MAH/456/2011",
    description: "Official registration establishing our legal identity as a social welfare organization.",
    image: "http://localhost:5000/uploads/c1.png"
  },
  {
    title: "Bombay Public Trusts Act, 1950",
    subtitle: "Registration Certificate",
    organization: "Public Trust Office",
    idNumber: "F-12121",
    description: "Registered as a public charitable trust ensuring transparency and accountability.",
    image: "http://localhost:5000/uploads/c2.jpg"
  },
  {
    title: "80G Registration",
    subtitle: "Tax Benefit for Donors",
    organization: "Income Tax Department",
    idNumber: "80G/VER/2023",
    description: "Donations are tax-exempt under section 80G, providing benefits to our supporters.",
    image: "http://localhost:5000/uploads/c3.Logo"
  }
];

const publications = [
  {
    title: "Sustainable Development in Rural India",
    tag: "IMPACT",
    date: "January 2024",
    src: "http://localhost:5000/uploads/g35.jpeg",
    fullContent: "Our latest study on how grassroots interventions are changing the socio-economic landscape of rural Maharashtra."
  },
  {
    title: "The Power of Education for All",
    tag: "EDUCATION",
    date: "February 2024",
    src: "http://localhost:5000/uploads/g24.jpeg",
    fullContent: "Exploring the transformative journey of students from marginalized communities through our scholarship programs."
  }
];

const importData = async () => {
  try {
    await Photo.deleteMany();
    await Certification.deleteMany();
    await Publication.deleteMany();

    await Photo.insertMany(photos);
    await Certification.insertMany(certifications);
    await Publication.insertMany(publications);

    console.log('Static Content Successfully Seeded to Database!');
    process.exit();
  } catch (error) {
    console.error(`Seeding Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
