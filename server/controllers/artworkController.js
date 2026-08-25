const Artwork = require ('../models/Artwork');

const getArtworks = async (req, res) => {
	try {
		res.status (200).json ({message: "Get artworks successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Get artworks failed", error: e.message});
	}
};

const getArtworkById = async (req, res) => {
	try {
		res.status (200).json ({message: "Get artwork by ID successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Get artwork by ID failed", error: e.message});
	}
};

const createArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Create artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Create artwork failed", error: e.message});
	}
};

const deleteArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Delete artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Delete artwork failed", error: e.message});
	}
};

const updateArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Update artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Update artwork failed", error: e.message});
	}
};

const likeArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Like artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Like artwork failed", error: e.message});
	}
};

const unlikeArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Unlike artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Unlike artwork failed", error: e.message});
	}
};

const saveArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Save artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Save artwork failed", error: e.message});
	}
};

const unsaveArtwork = async (req, res) => {
	try {
		res.status (200).json ({message: "Unsave artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Unsave artwork failed", error: e.message});
	}
};

const payForArtwork = async (req, res) => {
	try {
		const artwork = await Artwork.findById (req.params.id).select ('price isForSale artistId');

		if (!artwork) {
			return res.status (404).json ({message: 'Artwork not found'});
		}

		if (!artwork.isForSale) {
			return res.status (409).json ({message: 'Artwork is not for sale'});
		}

		// The database price is the only source of truth. Work in cents to avoid
		// floating-point errors in financial calculations.
		const totalCents = Math.round (artwork.price * 100);
		const platformFeeCents = Math.round (totalCents * 0.10);
		const artistPayoutCents = totalCents - platformFeeCents;

		res.status (200).json ({
			message: 'Secure payment amounts calculated',
			artworkId: artwork._id,
			artistId: artwork.artistId,
			currency: 'USD',
			total: totalCents / 100,
			platformFee: platformFeeCents / 100,
			artistPayout: artistPayoutCents / 100,
		});
	}
	catch (e) {
		res.status (500).json ({message: "Pay for artwork failed", error: e.message});
	}
};

module.exports = {getArtworks, getArtworkById, createArtwork, deleteArtwork, updateArtwork, likeArtwork, unlikeArtwork, saveArtwork, unsaveArtwork, payForArtwork};
