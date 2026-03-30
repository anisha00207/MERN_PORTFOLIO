const express=require('express');
const router=express.Router()
const technologyController=require('../controllers/technology-controller.js')
const adminAuth= require('../middleware/admin-auth-middleware')
router.route("/technology").get(technologyController.technology)//to get technologies at frontend
router.route("/technology").post(adminAuth,technologyController.addTechnolgy)

router.delete(
  "/technology/:id",
  adminAuth,
  technologyController.deleteTechnology
);

module.exports=router;