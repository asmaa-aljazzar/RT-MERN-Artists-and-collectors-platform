const express = require ('express');
const router = express.Router ();
const { login, 
	register, } = require ('../controllers/authController')

// login (email + pass), (google), (facebook)
router.post ('/login', login);

// register (email + pass), (google), (facebook)
router.post ('/register', register);

module.exports = router;
