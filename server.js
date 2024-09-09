const express = require('express');
const cors = require('cors');

const app = express();

const connectDB = require('./config/database');
const Note = require('./models/noteModel');

const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

require('dotenv').config();



// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/user', userRoutes);
app.use('/api/note', noteRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));