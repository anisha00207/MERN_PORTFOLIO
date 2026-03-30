const ProfileViews = require("../models/profileViews-model");
//////////////////////////////
////profile views
exports.incrementProfileViews = async (req, res) => {
  try {
    const views = await ProfileViews.findOneAndUpdate(
      { key: "portfolioViews" },
      { $inc: { count: 1 } },   // atomic increment
      {
        upsert: true,
        returnDocument: "after", // replaces `new: true`
      }
    );

    res.status(200).json({ views: views.count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update profile views" });
  }
};

