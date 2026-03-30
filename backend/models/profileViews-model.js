const mongoose = require("mongoose");

const profileViewsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("ProfileViews", profileViewsSchema);
