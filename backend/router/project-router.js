const express=require('express');
const router=express.Router()
const projectController=require('../controllers/project-controller.js')
const adminAuth= require('../middleware/admin-auth-middleware')

router.route("/projects").get(projectController.project) 

router.route("/projects").post(adminAuth,projectController.addProjects) 
//to get projects at frontend

router.delete(
  "/projects/:id",
  adminAuth,
  projectController.deleteProject
);
module.exports=router;
