const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  technologyName: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true,
  }
});
const Technology = new mongoose.model("Technology", technologySchema);

module.exports = Technology;
