const User = require ('../models/User');

const auditArtists = async (req, res) => {
	try {
		const artists = await User.find ({isArtist: true})
			.select ('-password')
			.populate ('artworks')
			.lean ({virtuals: true});

		res.status (200).json ({count: artists.length, artists});
	} catch (e) {
		res.status (500).json ({message: 'Artist audit failed', error: e.message});
	}
};

module.exports = {auditArtists};
