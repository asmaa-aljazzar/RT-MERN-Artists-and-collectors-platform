const express = require ('express');
const router = express.Router ();
const { login, register, forgotPassword, resetPassword } = require ('../controllers/authController')

// 1. post
// login (email + pass), (google), (facebook)
router.post ('/login', login);

// register (email + pass), (google), (facebook)
router.post ('/register', register);

// forgot password
router.post ('/forgot-password', forgotPassword)

// 2. patch
// reset password token
router.patch ('/reset-password/:token', resetPassword); 

module.exports = router;
