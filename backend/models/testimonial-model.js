const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  SocialMediaLink: {
    type: String,
    required: true,
  },
  Review: {
  type: String,
  required: true,
  trim: true,
  maxlength: 500,
},

  approval: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },

  
});
const Testimonial = new mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
