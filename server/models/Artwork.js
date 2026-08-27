const mongoose = require ('mongoose');

const ArtworkSchema = new mongoose.Schema ({
	title: {
		type: String,
		maxlength: 50,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		maxlength: 2000,
		default: "",
		trim: true,
	},
	imageUrl: {
		type: String,
		required: true,
		trim: true,
	},
	category: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		enum: ["digital", "ai-generated", "traditional"]
	},
	tags: {
		type: [{
			type: String,
			trim: true,
			lowercase: true,
			maxlength: 30,
		}],
		default: [],
		validate: [
			{
				validator: (tags) => tags.length <= 10,
			    message: "An artwork can have at most 10 tags",
			},
			{
				validator: (tags) => new Set (tags).size === tags.length,
				message: "Artwork tags must be unique",
			}
		]
	},
	artistId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
},{timestamps: true});

ArtworkSchema.index ({artistId: 1});
ArtworkSchema.index ({title: "text"});
ArtworkSchema.index ({category: 1, createdAt: -1});

module.exports = mongoose.model ('Artwork', ArtworkSchema);
