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
		res.status (200).json ({message: "Pay for artwork successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Pay for artwork failed", error: e.message});
	}
};

module.exports = {getArtworks, createArtwork, updateArtwork, likeArtwork, unlikeArtwork, saveArtwork, unsaveArtwork, payForArtwork};