const express = require("express");
const router = express.Router();
const contactform = require("../controllers/contact-controller.js")
const schemas= require("../validations/auth-validations.js")
const validate = require("../middleware/validate-middleware.js")

router.route("/contact").post(validate(schemas.contactschema),contactform)// to add the contact form responses into databases

module.exports=router;