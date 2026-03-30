const express=require("express");
const AdminController = require("../controllers/admin-controller");
const router=express.Router();


router.post("/login", AdminController.adminLogin)//adminlogin route
router.route('/contacts').get(AdminController.getAllContacts);//to get the contact form responses on admin panel route
router.route('/contacts/delete/:id').delete(AdminController.DeleteUserByID);// tp delete the contact form responses 


module.exports=router;