// server/controllers/authController.js
const login = async (req, res) =>{
	try {
		res.status (200).json ({message: "Login successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Login failed", error: e.message});
	}
}

const register = async () =>{
	try {
		res.status (200).json ({message: "Register successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Register failed", error: e.message});
	}
}

const forgotPassword = async () =>{
	try {
		res.status (200).json ({message: "Forgot password successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Forgot password failed", error: e.message});
	}
}

const resetPassword = async () =>{
	try {
		res.status (200).json ({message: "Reset password successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Reset password failed", error: e.message});
	}
}

module.exports = {login, register, forgotPassword, resetPassword};