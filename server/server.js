const mongoose = require ('mongoose');
const express = require ('express');
const cors = require ('cors');
require ('dotenv').config ()
const { connectDB } = require ('./config/db');
const authRoutes = require ('./routes/authRoutes');
const userRoutes = require ('./routes/userRoutes');
const artworkRoutes = require ('./routes/artworkRoutes');
const { notFound, errorHandler } = require ('./middleware/errorMiddleware');

const app = express ();

const startServer = async () => {
	await connectDB ();
	
	app.listen (PORT, () => console.log (`Server is running on port ${PORT}`));
}

// Global middleware
app.use (cors ());
app.use (express.json ());

// Baseline test endpoint
app.get ("/api/health", (req, res) => {
	const isDatabaseConnected = mongoose.connection.readyState === 1;

	res.status (isDatabaseConnected ? 200 : 500).json ({
		status: isDatabaseConnected ? "healthy" : "unhealthy",
		database: isDatabaseConnected ? "connected" : "disconnected",
	});
})

app.use ('/api/auth', authRoutes);
app.use ('/api/users', userRoutes);
app.use ('/api/artworks', artworkRoutes);

// Error handling middleware
app.use (notFound);
app.use (errorHandler);

// env variables
const PORT = process.env.PORT || 5002;

// Server listening
startServer ();