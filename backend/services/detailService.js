// src/services/detailsService.js
const Achievement = require('../models/achievementModel'); // Adjust the path to your Achievement model
const SuccessStory = require('../models/successStoryModel'); // Adjust the path to your SuccessStory model

const getProfileDetails = async (rollNo) => {
    const achievements = await Achievement.find({ rollNo }).lean();
    console.log(achievements);
    const successStories = await SuccessStory.find({ rollNo }).lean();

    return {
        rollNo,
        achievements,
        successStories
    };
};

module.exports = {
    getProfileDetails
};