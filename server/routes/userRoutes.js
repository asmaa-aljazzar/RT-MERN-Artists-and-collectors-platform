// todo: add protect middleware to protect routes
// todo: add OwnerOnly middleware to protect routes
// todo: add adminOnly middleware to protect routes	

const express = require ('express');
const router = express.Router ();
const {
	followUser,
	unfollowUser,
	getAllFollowers,
	getUserProfileById,
	updateProfile,
	deleteProfileImage,
	deleteProfile,
	banUser,
	unbanUser
} = require ('../controllers/userController');

router.post ('/follow/:id', followUser); // protect, ownerOnly
router.delete ('/unfollow/:id', unfollowUser); // protect, ownerOnly
router.get ('/followers', getAllFollowers); // protect.
router.get ('/profile/:id', getUserProfileById);// protect.
router.put ('/profile/update/:id', updateProfile);// protect, ownerOnly.
router.delete ('/profile/image/:id', deleteProfileImage);// protect, ownerOnly.
router.delete ('/profile/delete/:id', deleteProfile);	// protect, ownerOnly.
router.put ('/ban/:id', banUser); // protect, adminOnly.
router.put ('/unban/:id', unbanUser); // protect, adminOnly.
module.exports = router;

