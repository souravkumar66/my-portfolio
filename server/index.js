const rateLimit = require('express-rate-limit');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.set('trust proxy', 1);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 requests
  message: { error: "You are sending messages too fast! Please try again after 15 minutes." }
});

// Routes Import
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Basic Route for Testing
app.get('/', (req, res) => {
  res.send('Sourav Portfolio API is running...');
});

// Database Connection & Server Start
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB connection error: ", err));