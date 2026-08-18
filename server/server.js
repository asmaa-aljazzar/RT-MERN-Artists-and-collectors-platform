const express = require ('express');
const cors = require ('cors');
require ('dotenv').config ()
const { connectDB } = require ('./config/db');
const authRoutes = require ('./routes/authRoutes');
const userRoutes = require ('./routes/userRoutes');

const app = express ();

connectDB ();

// Global middleware
app.use (cors ());
app.use (express.json ());

// Baseline test endpoint
app.get ("/api/health", (req, res) => {
	res.json ({status: 'healthy', database: "Trying to connect..."});
})

app.use ('/api/auth', authRoutes);
app.use ('/api/users', userRoutes);
app.use ('/api/artworks', artworkRoutes);

// env variables
const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI;

// Server listening
app.listen (PORT, () => console.log (`Server is running on port ${PORT}`));

