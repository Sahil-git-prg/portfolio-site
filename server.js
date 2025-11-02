// Root-level Express server for COMP229 Assignment 2
// Place this file at the ROOT of your React project (beside package.json).
// Run with: npm run dev  (after adding the scripts noted in the README)

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'; // loads .env

import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import qualificationRoutes from './server/routes/qualificationRoutes.js';
import userRoutes from './server/routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Default route required by assignment
app.get('/', (req, res) => res.json({ message: 'Welcome to My Portfolio application.' }));

// API routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || '';
if (!MONGO_URI) console.warn('⚠️  MONGO_URI is missing. Create a .env file (see .env.example).');
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
