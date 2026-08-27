const mongoose = require('mongoose');

const ArtworkSaveSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	artworkId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Artwork',
		required: true,
	},
}, { timestamps: true },);

ArtworkSaveSchema.index(
	{ userId: 1, artworkId: 1 },
	{ unique: true },
);

ArtworkSaveSchema.index({ artworkId: 1 });

module.exports = mongoose.model("ArtworkSave", ArtworkSaveSchema);