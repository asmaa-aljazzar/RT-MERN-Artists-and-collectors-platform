const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: { // ui appear after OAuth to ask about username
		type: String,
		required: [true, 'Please provide a unique username'],
		unique: true,
		trim: true,
	},
	email: { // email writen or using AOuth
		type: String,
		required: [true, "Please provide a unique email"],
		unique: true,
		lowercase: true,
		trim: true,
	},
	// optional password, to support Google/ faceboock OAuth login
	password: {
		type: String,
		required: function () {
			return !this.googleId && !this.facebookId;
		},
	},
	// check if we using AOuth to check for passwrod requiring
	googleId: {
		type: String,
		required: false,
	},
	facebookId: {
		type: String,
		required: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	isArtist: { // to open more features
		type: Boolean,
		default: false,
	},
	isVerified: { // to build trust when pay a workart
		type: Boolean,
		default: false,
	},
	isBanned: {
		type: Boolean,
		default: false,
	},
	rating: { // set after each save or likes or just when pay - //todo: checkthis
		type: Number,
		default: 0,
	},
	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	],
	savedArtworks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Artwork',
		}
	],

	likedArtworks: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Artwork',
		}
	],
}, { timestamps: true });

UserSchema.virtual('artworks', {
	ref: 'Artwork', // The model to search within
	localField: '_id', // The user unique key
	foreignField: 'artistId', // The field inside Artwork schema
})

UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
