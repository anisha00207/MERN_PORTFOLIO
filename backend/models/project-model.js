const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  ProjectName: {
    type: String,
    required: true,
  },
  TechStack: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
 
 Keywords: {
    type: [String],
    required: true,
    default: [], // ensure it's at least an empty array
  },

  Link:{
    type: String,
    required: true,
  },
  ImageURL:{
    type: String,
    required: true,
  }
});
const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;










