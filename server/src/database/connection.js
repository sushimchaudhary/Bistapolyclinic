// src/database/connection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' }); // Adjust path as needed

const dbConnect = async () => {
  const uri = process.env.MONGODB_CONNECTION_URI;

  if (!uri) {
    console.error('❌ MONGODB_CONNECTION_URI is undefined. Check your .env file.');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default dbConnect;
