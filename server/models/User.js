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
	}
}, {timestamps: true});

module.exports = mongoose.model ('User', UserSchema);