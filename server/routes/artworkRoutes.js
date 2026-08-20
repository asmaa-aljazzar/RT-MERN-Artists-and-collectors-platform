// todo: add auth middleware to protect routes
// todo: add ArtistOnly middleware to protect routes
// todo: add OwnerOnly middleware to protect routes

const express = require ('express');
const router = express.Router ();
const {getArtworks, getArtworkById, createArtwork, deleteArtwork,updateArtwork, likeArtwork, unlikeArtwork, saveArtwork, unsaveArtwork, payForArtwork} = require ('../controllers/artworkController');

router.get ('/', getArtworks);
router.get ('/:id', getArtworkById);
router.post ('/create', createArtwork); // protect, artistOnly, ownerOnly
router.delete ('/delete/:id', deleteArtwork); // protect, artistOnly, ownerOnly
router.put ('/update/:id', updateArtwork); // protect, artistOnly, ownerOnly
router.post ('/like/:id', likeArtwork); // protect
router.post ('/unlike/:id', unlikeArtwork); // protect
router.post ('/save/:id', saveArtwork); // protect,
router.post ('/unsave/:id', unsaveArtwork); // protect
router.post ('/pay/:id', payForArtwork); // protect

module.exports = router;
