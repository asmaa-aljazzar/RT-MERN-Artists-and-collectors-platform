const express = require ('express');
const {auditArtists} = require ('../controllers/adminController');

const router = express.Router ();

// TODO: Add authentication and adminOnly middleware before production use.
router.get ('/audit', auditArtists);

module.exports = router;
