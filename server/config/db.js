const mongoose = require ('mongoose');

exports.connectDB = async () => {
	try {
		const conn = await mongoose.connect (process.env.MONGO_URI);
		console.log (`MongoDB Connected: ${conn.connection.host}`);
	} catch (e)
	{
		console.log (`Database Connection Error: ${e.message}`);
		process.exit (1);
	}
}