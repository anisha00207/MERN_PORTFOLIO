const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  certificateName: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  Timeline: {
    type: String,
    required: true,
  }
});
const Certification = new mongoose.model("Certification", certificationSchema);

module.exports = Certification;