const getProfileData = async (req, res) => {
	try {
		res.status (200).json ({message: "Get profile data successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Get profile data failed", error: e.message});
	}
}


const updateProfile = async (req, res) => {
	try {
		res.status (200).json ({message: "Update profile successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Update profile failed", error: e.message});
	}
}

const getUserProfileById = async (req, res) => {
	try {
		res.status (200).json ({message: "Get user profile successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Get user profile failed", error: e.message});
	}
}

const	followUser = async (req, res) => {
	try {
		res.status (200).json ({message: "Follow successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Follow failed", error: e.message});
	}
}

const	unfollowUser = async (req, res) => {
	try {
		res.status (200).json ({message: "Unfollow successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Unfollow failed", error: e.message});
	}
}

const getAllFollowers = async (req, res) => {
	try {
		res.status (200).json ({message: "Get all followers successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Get all followers failed", error: e.message});
	}
}

const deleteProfileImage = async (req, res) => {
	try {
		res.status (200).json ({message: "Delete profile image successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Delete profile image failed", error: e.message});
	}
}

const deleteProfile = async (req, res) => {
	try {
		res.status (200).json ({message: "Delete profile successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Delete profile failed", error: e.message});
	}
}

const banUser = async (req, res) => {
	try {
		res.status (200).json ({message: "Ban user successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Ban user failed", error: e.message});
	}
}

const unbanUser = async (req, res) => {
	try {
		res.status (200).json ({message: "Unban user successful"});
	}
	catch (e) {
		res.status (500).json ({message: "Unban user failed", error: e.message});
	}
}

module.exports = {
	getProfileData,
	updateProfile,
	followUser,
	unfollowUser,
	deleteProfileImage,
	deleteProfile,
	getUserProfileById,
	getAllFollowers,
	banUser,
	unbanUser
}