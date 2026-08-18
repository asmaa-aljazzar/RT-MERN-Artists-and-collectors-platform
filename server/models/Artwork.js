const mongoose = require ('mongoose');

const ArtworkSchema = new mongoose.Schema ({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: false,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	// The size of the image/ with default options
	dimensions: {
		type: String,
	},
	// if sold, write the price and sold, if not write price, if not for sale , there will be no price
	price: {
		type: Number,
		default: 0,
	},
	isForSale: {
		type: Boolean,
		default: false,
	},
	category: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
	},
	artistId: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
},{timestamps: true});

ArtworkSchema.set ('toJSON', {virtuals: true});
ArtworkSchema.set ('toObject', {virtuals: true});

module.exports = mongoose.model ('Artwork', ArtworkSchema);