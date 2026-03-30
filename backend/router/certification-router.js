const express=require('express');
const router=express.Router()
const certificationController=require('../controllers/certification-controller.js')
const adminAuth= require('../middleware/admin-auth-middleware')
router.route("/certification").get(certificationController.certification)// to get the certifictaions at frontend
router.route("/certification").post(adminAuth,certificationController.addCertification)// to get the certifictaions at frontend
router.delete(
  "/certification/:id",
  adminAuth,
  certificationController.deleteCertification
);
module.exports=router;