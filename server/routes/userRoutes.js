// todo: add protect middleware to protect routes
// todo: add OwnerOnly middleware to protect routes
// todo: add adminOnly middleware to protect routes	

const express = require ('express');
const router = express.Router ();
const { getUserProfileById, updateProfile } = require ('../controllers/userController');

router.get ('/profile/:id', getUserProfileById);// protect.
router.put ('/profile/update/:id', updateProfile);// protect, ownerOnly.

module.exports = router;

