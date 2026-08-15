const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({
	username: {
		type: String,
		required: [true, 'Please provide a unique username'],
		unique: true,
		trim: true,
	},
	email: {
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
	googleId: {
		type: String,
		required: false,
	},
	facebookId: {
		type: String,
		required: false,
	},
	isArtist: {
		type: Boolean,
		default: false,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	rating: {
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
}, {timestamps: true});

UserSchema.virtual ('artwroks', {
	ref: 'Artwork', // The model to search within
	localField: '_id', // The user unique key
	foreignField: 'artistId', // The field inside Artwork schema
})

UserSchema.set ('toJSON', {virtuals: true});
UserSchema.set ('toObject', {virtuals: true});

module.exports = mongoose.model ('User', UserSchema);