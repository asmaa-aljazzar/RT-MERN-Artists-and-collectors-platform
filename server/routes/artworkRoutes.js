// todo: add auth middleware to protect routes
// todo: add ArtistOnly middleware to protect routes
// todo: add OwnerOnly middleware to protect routes

const express = require ('express');
const router = express.Router ();
const {getArtworks, createArtwork, updateArtwork, likeArtwork, unlikeArtwork, saveArtwork, unsaveArtwork, payForArtwork} = require ('../controllers/artworkController');

router.get ('/', getArtworks);
router.post ('/create', createArtwork); // protect, artistOnly, ownerOnly
router.put ('/update/:id', updateArtwork); // protect, artistOnly, ownerOnly
router.post ('/like/:id', likeArtwork); // protect, artistOnly, ownerOnly
router.post ('/unlike/:id', unlikeArtwork); // protect, artistOnly, ownerOnly
router.post ('/save/:id', saveArtwork); // protect, artistOnly, ownerOnly
router.post ('/unsave/:id', unsaveArtwork); // protect, artistOnly, ownerOnly
router.post ('/pay/:id', payForArtwork); // protect, artistOnly, ownerOnly

module.exports = router;