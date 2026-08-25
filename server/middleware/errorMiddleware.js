/**
 * Handles requests that did not match any route.
 * @param {import('express').Request} req - The incoming HTTP request.
 * @param {import('express').Response} res - The outgoing HTTP response.
 * @returns {import('express').Response} A consistent 404 JSON response.
 */
const notFound = (req, res) => {
	return res.status(404).json({
		success: false,
		status: 404,
		message: 'Route not found',
	});
};

/**
 * Handles errors passed through the Express middleware chain.
 * @param {Error & {status?: number}} err - The error being handled.
 * @param {import('express').Request} req - The incoming HTTP request.
 * @param {import('express').Response} res - The outgoing HTTP response.
 * @param {import('express').NextFunction} next - The next middleware function.
 * @returns {import('express').Response} A consistent error JSON response.
 */
const errorHandler = (err, req, res, next) => {
	const status = err.status || 500;
	
	return res.status(status).json({
		success: false,
		status,
		message: err.message || 'Internal Server Error',
	});
};

module.exports = { notFound, errorHandler };
