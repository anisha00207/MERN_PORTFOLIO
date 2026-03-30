const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  jobRole: {
    type: String,
    required: true,
  },
  CompanyName: {
    type: String,
    required: true,
  },
   Duration: {
    type: String,
    required: true,
  },
  
});
const Experience = new mongoose.model("Experience", experienceSchema);

module.exports = Experience;
