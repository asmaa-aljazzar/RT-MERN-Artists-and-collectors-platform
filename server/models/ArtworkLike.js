const mongoose = require('mongoose');

const ArtworkLikeSchema = new mongoose.Schema(
	{
	artworkId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Artwork',
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
},{ timestamps: true },);

// The compound index also supports efficient queries by userId alone.
ArtworkLikeSchema.index(
	{ userId: 1, artworkId: 1 },
	{ unique: true },
);

// A separate index supports efficient queries by artworkId alone.
ArtworkLikeSchema.index({ artworkId: 1 });

module.exports = mongoose.model('ArtworkLike', ArtworkLikeSchema);