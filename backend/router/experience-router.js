const express=require('express');
const router=express.Router()
const experienceController=require('../controllers/experience-controller.js')
const adminAuth = require("../middleware/admin-auth-middleware");
router.route("/experience").get(experienceController.experience)//to get experirnces at frontend
router.route("/experience").post(adminAuth,experienceController.addExperience)
router.delete(
  "/experience/:id",
  adminAuth,
  experienceController.deleteExperience
);
module.exports=router;
