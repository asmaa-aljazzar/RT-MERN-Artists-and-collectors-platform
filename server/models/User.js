const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Please provide a unique username'],
		trim: true,
		lowercase: true,
		unique: true,
		minlength: 3,
		maxlength: 30,
	},
	email: {
		type: String,
		required: [true, "Please provide a unique email"],
		trim: true,
		lowercase: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	profileImage: {
		type: String,
		trim: true,
		default: null,
	},
	bio: {
		type: String,
		trim: true,
		maxlength: 300,
		default: "",
	},
	isArtist: {
		type: Boolean,
		default: false,
	},
}, { timestamps: true });

UserSchema.virtual('artworks', {
	ref: 'Artwork', // The model to search within
	localField: '_id', // The user unique key
	foreignField: 'artistId', // The field inside Artwork schema
});

UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
