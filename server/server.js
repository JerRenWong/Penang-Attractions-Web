require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postsRouter = require('./routes/posts');
const path = require('path');

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
})
.catch(err => {
  console.error('Could not connect to MongoDB:', err);
  console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
});

// Routes
app.use('/api/posts', postsRouter);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Penang Tourism API is running',
    environment: process.env.NODE_ENV || 'development',
    mongoConnected: mongoose.connection.readyState === 1
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Environment variables:');
  console.log('- PORT:', process.env.PORT || '3000 (default)');
  console.log('- NODE_ENV:', process.env.NODE_ENV || 'development (default)');
  console.log('- FRONTEND_URL:', process.env.FRONTEND_URL || 'http://localhost:3001 (default)');
});
