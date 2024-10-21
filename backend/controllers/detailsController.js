// src/controllers/detailsController.js
const detailsService = require('../services/detailService');

const getDetails = async (req, res) => {
    const { rollNo } = req.params;

    try {
        const profileDetails = await detailsService.getProfileDetails(rollNo);

        // Log the data being sent in the response
        console.log('Profile Details:', profileDetails);

        res.json({ profile: profileDetails });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getDetails
};