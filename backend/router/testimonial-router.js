const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/admin-auth-middleware");
const testimonialController = require("../controllers/testimonial-controller");
const schemas=require("../validations/auth-validations")
const validate = require("../middleware/validate-middleware.js")
// Public
router.post("/testimonials", validate(schemas.testimonialSchema), testimonialController.AddTestimonial);// to add testimonials into database
router.get("/testimonials", testimonialController.getAdminTestimonials);//to get tetsimonials to frontend

// Admin protected
router.patch(
  "/testimonials/:id/approve",
  adminAuth,
  testimonialController.approveTestimonial
);

router.delete(
  "/testimonials/:id",
  adminAuth,
  testimonialController.deleteTestimonial
);

module.exports = router;
